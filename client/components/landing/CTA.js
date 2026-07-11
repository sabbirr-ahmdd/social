import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white border border-[#e8ede9] rounded-3xl p-6 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div>
        <h2 className="text-[26px] md:text-[32px] font-light tracking-tight text-[#0a0f0c] mb-2">
          Ready to bring{" "}
          <span className="font-semibold">people together?</span>
        </h2>
        <p className="text-[14px] font-medium text-[#3d4f45]">
          Free to start. Create your first event in minutes.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 flex-shrink-0">
        <Link
          href="/register"
          className="text-[14px] font-semibold bg-[#0f1512] text-white px-8 py-3.5 rounded-full hover:bg-[#1f6b45] transition-colors whitespace-nowrap"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}