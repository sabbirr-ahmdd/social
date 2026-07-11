import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border border-[#e8ede9] rounded-3xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
      <Link href="/" className="text-[15px] font-semibold tracking-tight text-[#0a0f0c]">
        ropp<span className="text-[#1f6b45]">al</span>
      </Link>
      <p className="text-[12px] font-medium text-[#3d4f45]">
        © 2026 Roppal. All rights reserved.
      </p>
      <div className="flex gap-5">
        <Link href="/privacy" className="text-[12px] font-medium text-[#3d4f45] hover:text-[#0a0f0c] transition-colors">
          Privacy
        </Link>
        <Link href="/terms" className="text-[12px] font-medium text-[#3d4f45] hover:text-[#0a0f0c] transition-colors">
          Terms
        </Link>
      </div>
    </footer>
  );
}