import app from "@/lib/axios";


export const googleLogin = async (googleToken) => {
  const res = await app.post("/api/v1/auth/login", {
    accessToken: googleToken,
  });
  return res.data;
};


export const logoutService = async () => {
  const res = await app.post("/api/v1/auth/logout");
  return res.data;
};

