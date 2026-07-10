import jwt from "jsonwebtoken";
import User from "../models/User.js";


const generateToken = (userId) => {
    return jwt.sign({ userId },
        process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "30d" }
    );
};

export const googleAuth = async(req, res) => {
    try {
        const { accessToken } = req.body;

        if (!accessToken) {
            return res.status(400).json({
                success: false,
                message: "Google token is required",
            });
        }


        const googleRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${accessToken}` },
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

        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: isNewUser ? "Account created successfully" : "Login successful",
            token,
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