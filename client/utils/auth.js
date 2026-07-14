import app from "@/lib/axios";

export const getAccessToken = async () => {
  try {
    const res = await app.post("/api/v1/auth/refresh");
    console.log("Access token refreshed:", res.data.accessToken);
    return res.data.accessToken;
  } catch {
    return null;
  }
};