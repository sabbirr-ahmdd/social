"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "@/context/AuthContext";
import { googleLogin } from "@/services/authService";

export default function SignupPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoogleSignup = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        setLoading(true);
        setError(null);
        const data = await googleLogin(response.access_token);
        login(data.user, data.accessToken);
        router.push("/main/feed");
      } catch (err) {
        setError(err?.response?.data?.message || "Signup failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    onError: () => {
      setError("Google sign up was cancelled or failed.");
      setLoading(false);
    },
  });

  return (
    <div className="min-h-screen bg-[#f0f4f1] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[400px] flex flex-col gap-4">

        <div className="text-center mb-2">
          <a href="/" className="text-[28px] font-bold tracking-tight text-[#0a0f0c]">
            ropp<span className="text-[#1f6b45]">al</span>
          </a>
        </div>

        <div className="bg-white border border-[#e8ede9] rounded-3xl p-8 flex flex-col gap-6">
          <div className="text-center">
            <h1 className="text-[20px] font-bold text-[#0a0f0c] mb-1.5 tracking-tight">
              Create your account
            </h1>
            <p className="text-[14px] text-[#3d4f45] font-medium leading-relaxed">
              Join Roppal — 100% free, no credit card needed
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              ["🌍", "Create public & private events"],
              ["✅", "RSVP and split costs with friends"],
              ["💬", "Chat inside every event"],
            ].map(([icon, text], i) => (
              <div key={i} className="flex items-center gap-3 bg-[#f0f4f1] rounded-2xl px-4 py-3">
                <span className="text-[16px]">{icon}</span>
                <p className="text-[13px] text-[#3d4f45] font-semibold">{text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setLoading(true);
              setError(null);
              handleGoogleSignup();
            }}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-[#1f6b45] hover:bg-[#196038] text-white font-semibold text-[14px] rounded-2xl px-5 py-3.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                <span>Creating account...</span>
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#ffffff" fillOpacity=".9" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#ffffff" fillOpacity=".9" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#ffffff" fillOpacity=".9" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#ffffff" fillOpacity=".9" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Sign up with Google</span>
              </>
            )}
          </button>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <p className="text-[13px] text-red-600 font-medium text-center">{error}</p>
            </div>
          )}

          <p className="text-center text-[13px] text-[#3d4f45] font-medium">
            Already have an account?{" "}
            <a href="/auth/login" className="text-[#1f6b45] font-semibold hover:underline">
              Sign in
            </a>
          </p>
        </div>

        <p className="text-center text-[12px] text-[#7a8c83] font-medium">
          By signing up, you agree to our{" "}
          <a href="/terms" className="text-[#1f6b45] hover:underline">Terms</a>
          {" "}and{" "}
          <a href="/privacy" className="text-[#1f6b45] hover:underline">Privacy Policy</a>.
        </p>

      </div>
    </div>
  );
}