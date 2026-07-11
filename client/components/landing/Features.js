const features = [
  {
    icon: "🌍",
    title: "Public & Private",
    desc: "Open to everyone or invite-only. Your choice, per event.",
  },
  {
    icon: "🧾",
    title: "RSVP & Split costs",
    desc: "See who's coming. Split expenses and pay instantly via SSLCommerz.",
  },
  {
    icon: "💬",
    title: "Event Chat",
    desc: "Every event gets its own chat. No more scattered group messages.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white border border-[#e8ede9] rounded-3xl p-6 md:p-12">
      <p className="text-[11px] font-bold text-[#1a5c3a] uppercase tracking-widest mb-2">Features</p>
      <h2 className="text-[28px] md:text-[32px] font-light tracking-tight text-[#0a0f0c] mb-8">
        Everything your <span className="font-semibold">event needs</span>
      </h2>

      <div className="grid sm:grid-cols-3 gap-3">
        {features.map((f, i) => (
          <div key={i} className="bg-[#f0f4f1] border border-[#d4ddd6] rounded-2xl p-5">
            <div className="w-9 h-9 rounded-xl bg-[#d4ede0] border border-[#a8d4bc] flex items-center justify-center text-[18px] mb-4">
              {f.icon}
            </div>
            <h3 className="text-[13px] font-semibold text-[#0a0f0c] mb-2">{f.title}</h3>
            <p className="text-[12px] text-[#3d4f45] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}