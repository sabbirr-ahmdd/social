import Link from "next/link";

function PhoneFeed() {
  return (
    <div className="w-[140px] shrink-0 bg-[#f0f4f1] border border-[#e8ede9] rounded-2xl p-2.5">
      <div className="w-8 h-1 bg-[#d4ddd6] rounded-full mx-auto mb-3" />

      <div className="bg-white border border-[#e8ede9] rounded-xl overflow-hidden mb-2">
        <div className="h-11 bg-[#e8f5ee] flex items-center justify-center text-lg">🏔️</div>
        <div className="p-2">
          <div className="flex items-center gap-1 mb-1">
            <div className="w-3 h-3 rounded-[3px] bg-[#1f6b45] flex items-center justify-center text-[6px] font-bold text-white">DH</div>
            <span className="text-[8px] text-[#1f6b45] font-semibold">Dhaka Hikers</span>
          </div>
          <p className="text-[9px] font-semibold text-[#0a0f0c] mb-0.5 leading-tight">Sundarbans Trek</p>
          <p className="text-[8px] text-[#3d4f45] mb-1.5">Aug 12 · Khulna</p>
          <div className="flex justify-between items-center">
            <span className="text-[8px] text-[#1f6b45] font-semibold">+34 going</span>
            <span className="text-[8px] font-semibold bg-[#1f6b45] text-white px-1.5 py-0.5 rounded-full">Join</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#e8ede9] rounded-xl overflow-hidden">
        <div className="h-11 bg-[#eef4ff] flex items-center justify-center text-lg">🎂</div>
        <div className="p-2">
          <p className="text-[9px] font-semibold text-[#0a0f0c] mb-0.5 leading-tight">Nadia's Birthday</p>
          <p className="text-[8px] text-[#3d4f45] mb-1.5">Jul 20 · Private</p>
          <div className="flex justify-between items-center">
            <span className="text-[8px] text-[#2d5fb8] font-semibold">6 invited</span>
            <span className="text-[8px] font-semibold bg-[#4a7fd4] text-white px-1.5 py-0.5 rounded-full">View</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneProfile() {
  return (
    <div className="w-[140px] shrink-0 bg-white border border-[#e8ede9] rounded-2xl p-2.5">
      <div className="w-8 h-1 bg-[#d4ddd6] rounded-full mx-auto mb-3" />

      <div className="flex items-center gap-1.5 mb-2.5">
        <div className="w-7 h-7 rounded-full bg-[#e8f5ee] border-2 border-[#a8d4bc] flex items-center justify-center text-[10px] font-bold text-[#1f6b45] shrink-0">SA</div>
        <div className="min-w-0">
          <p className="text-[9px] font-semibold text-[#0a0f0c] truncate">Sabbir Ahmed</p>
          <p className="text-[8px] text-[#3d4f45]">@sabbir · 🌍</p>
        </div>
      </div>

      <div className="flex border-y border-[#e8ede9] mb-2.5">
        {[["12","Events"],["248","Foll."],["91","Foll."]].map(([n,l],i) => (
          <div key={i} className={`flex-1 py-1.5 text-center ${i < 2 ? "border-r border-[#e8ede9]" : ""}`}>
            <p className="text-[11px] font-bold text-[#0a0f0c]">{n}</p>
            <p className="text-[7px] font-medium text-[#3d4f45]">{l}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-1">
        {[["🏔️","#d4ede0"],["🎵","#d4e4ff"],["🏕️","#fde8c0"],["🎂","#fdd4d4"]].map(([e,bg],i) => (
          <div key={i} className="h-9 rounded-lg flex items-center justify-center text-base" style={{background:bg}}>{e}</div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-white border border-[#e8ede9] rounded-3xl p-6 md:p-14 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#c2dfd0] opacity-40 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col md:grid md:grid-cols-2 md:gap-10 md:items-center">

        {/* Text */}
        <div className="mb-8 md:mb-0">
          <div className="inline-flex items-center gap-2 bg-[#e8f5ee] text-[#1a5c3a] text-[12px] font-semibold px-4 py-1.5 rounded-full border border-[#a8d4bc] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1f6b45] pulse-dot inline-block" />
            Plan anything, anywhere in the world
          </div>

          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-light leading-[1.08] tracking-[-2px] text-[#0a0f0c] mb-4">
            Where events<br />come{" "}
            <span className="font-semibold text-[#1f6b45]">alive.</span>
          </h1>

          <p className="text-[14px] sm:text-[15px] text-[#3d4f45] leading-[1.7] mb-7 max-w-sm">
            Create, discover and join events with your circle or the world. RSVP, split costs, chat — one place for all of it.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/register"
              className="text-[13px] font-semibold bg-[#0f1512] text-white px-6 py-3 rounded-full hover:bg-[#1f6b45] transition-colors"
            >
              Get started
            </Link>
            <Link
              href="#how-it-works"
              className="text-[13px] font-semibold bg-[#e8f5ee] text-[#1a5c3a] px-6 py-3 rounded-full border border-[#a8d4bc] hover:bg-[#d4ede0] transition-colors"
            >
              See how it works →
            </Link>
          </div>

        </div>

        {/* Phones — fixed overflow on mobile */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-1">
            <div className="snap-start shrink-0">
              <PhoneFeed />
            </div>
            <div className="snap-start shrink-0 mt-6">
              <PhoneProfile />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}