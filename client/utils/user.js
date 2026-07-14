import app from "@/lib/axios";

export const getUser = async (token, setUser, clearTokens) => {
  try {
    const res = await app.get("/api/v1/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(res.data.user);
  } catch {
    clearTokens();
  }
};