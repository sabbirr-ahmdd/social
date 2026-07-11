import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5">
        <div className="bg-[#1A1A2E] border border-[#7C6FFF]/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#7C6FFF]/10 blur-3xl rounded-full" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#F0EDE8] tracking-tight mb-4">
              Ready to bring people together?
            </h2>
            <p className="text-[#F0EDE8]/40 mb-8 max-w-md mx-auto">
              Free to start. Create your first event in minutes.
            </p>
            <Link href="/register" className="inline-block bg-[#7C6FFF] hover:bg-[#6B5FEE] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors">
              Get started free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}