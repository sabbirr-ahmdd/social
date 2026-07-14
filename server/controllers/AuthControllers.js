import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";


export const googleAuth = async(req, res) => {
    try {
        const { accessToken: googleToken } = req.body;

        if (!googleToken) {
            return res.status(400).json({
                success: false,
                message: "Google token is required",
            });
        }


        const googleRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${googleToken}` },
        });

        if (!googleRes.ok) {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired Google token",
            });
        }

        const { name, email, picture, email_verified } = await googleRes.json();

        if (!email_verified) {
            return res.status(401).json({
                success: false,
                message: "Google email is not verified",
            });
        }


        let user = await User.findOne({ email });
        const isNewUser = !user;

        if (isNewUser) {
            user = await User.create({
                name,
                email,
                avatarUrl: picture || null,
            });
        }

        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.status(200).json({
            success: true,
            message: isNewUser ? "Account created successfully" : "Login successful",
            accessToken: accessToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatarUrl: user.avatarUrl,
            },
        });


    } catch (error) {
        console.error("Google auth error:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};


export const refreshToken = async(req, res) => {
    try {
        const token = req.cookies.refreshToken;
        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Refresh token is required",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        const newAccessToken = generateAccessToken(decoded.userId);

        res.status(200).json({
            success: true,
            accessToken: newAccessToken,
        });

    } catch (error) {
        console.error("Refresh token error:", error);
        res.status(401).json({
            success: false,
            message: "Invalid or expired refresh token",
        });
    }

};


export const logout = (req, res) => {
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        path: "/",
    });
    res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
};

export const getUser = async (req, res) => {
    try {
        const user = req.user;

        if (!user) {
            return res.status(404).json({ message: "User not found"});
        }

        res.status(200).json({
            name: user.name,
            email: user.email,
            avatarUrl: user.avatarUrl,
            phone: user.phone,
            username: user.username,
            bio: user.bio,
            location: user.location,
            dateOfBirth: user.dateOfBirth,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error"});
    }
}
