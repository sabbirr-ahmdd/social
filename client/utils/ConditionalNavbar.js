"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function ConditionalWrapper({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/main");

  return (
    <div className="bg-[#f0f4f1] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-3">
        {!hideLayout && <Navbar />}
        {children}
        {!hideLayout && <Footer />}
      </div>
    </div>
  );
}