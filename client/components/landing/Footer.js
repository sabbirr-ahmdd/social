import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-lg font-semibold text-[#F0EDE8]">
          feel<span className="text-[#7C6FFF]">ide</span>
        </Link>
        <p className="text-xs text-[#F0EDE8]/25">
          © {new Date().getFullYear()} Feelide. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="text-xs text-[#F0EDE8]/30 hover:text-[#F0EDE8]/60 transition-colors">Privacy</Link>
          <Link href="/terms" className="text-xs text-[#F0EDE8]/30 hover:text-[#F0EDE8]/60 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}