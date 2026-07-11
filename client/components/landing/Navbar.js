"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0F0A]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        <Link href="/" className="text-xl font-semibold tracking-tight text-[#E8F0E8]">
          feel<span className="text-[#2A7A4B]">ide</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-[#E8F0E8]/50 hover:text-[#E8F0E8] transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-[#E8F0E8]/50 hover:text-[#E8F0E8] transition-colors">
            How it works
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-[#E8F0E8]/60 hover:text-[#E8F0E8] transition-colors">
            Sign in
          </Link>
          <Link href="/register" className="text-sm bg-[#2A7A4B] hover:bg-[#236040] text-white px-4 py-2 rounded-full transition-colors">
            Get started
          </Link>
        </div>

        <button className="md:hidden text-[#E8F0E8]/60" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0A0F0A] px-5 py-4 flex flex-col gap-4">
          <Link href="#features" className="text-sm text-[#E8F0E8]/60" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link href="#how-it-works" className="text-sm text-[#E8F0E8]/60" onClick={() => setMenuOpen(false)}>How it works</Link>
          <Link href="/login" className="text-sm text-[#E8F0E8]/60">Sign in</Link>
          <Link href="/register" className="text-sm bg-[#2A7A4B] text-white px-4 py-2 rounded-full text-center">Get started</Link>
        </div>
      )}
    </nav>
  );
}