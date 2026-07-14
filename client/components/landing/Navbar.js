"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border border-[#e8ede9] rounded-3xl px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-[18px] font-semibold tracking-tight text-[#0a0f0c]">
          ropp<span className="text-[#1f6b45]">al</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-[13px] font-medium text-[#3d4f45] hover:text-[#0a0f0c] transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-[13px] font-medium text-[#3d4f45] hover:text-[#0a0f0c] transition-colors">How it works</Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/auth/login" className="text-[13px] font-medium text-[#3d4f45] hover:text-[#0a0f0c] transition-colors">Sign in</Link>
          <Link href="/auth/register" className="text-[13px] font-semibold bg-[#0f1512] text-white px-5 py-2.5 rounded-full hover:bg-[#1f6b45] transition-colors">Get started</Link>
        </div>
        <button className="md:hidden text-[#3d4f45]" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden pt-4 mt-4 border-t border-[#e8ede9] flex flex-col gap-3">
          <Link href="#features" className="text-[13px] font-medium text-[#3d4f45]" onClick={() => setOpen(false)}>Features</Link>
          <Link href="#how-it-works" className="text-[13px] font-medium text-[#3d4f45]" onClick={() => setOpen(false)}>How it works</Link>
          <Link href="/auth/login" className="text-[13px] font-medium text-[#3d4f45]">Sign in</Link>
          <Link href="/auth/register" className="text-[13px] font-semibold bg-[#0f1512] text-white px-5 py-2.5 rounded-full text-center">Get started</Link>
        </div>
      )}
    </nav>
  );
}