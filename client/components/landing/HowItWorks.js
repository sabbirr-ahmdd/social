const steps = [
  {
    num: "01",
    title: "Create your event",
    desc: "Set a date, location and cover photo. Done in under a minute.",
  },
  {
    num: "02",
    title: "Invite or go public",
    desc: "Invite your circle directly, or let anyone discover and join.",
  },
  {
    num: "03",
    title: "Coordinate together",
    desc: "RSVP, split costs, chat — all inside the event.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white border border-[#e8ede9] rounded-3xl p-6 md:p-12">
      <p className="text-[11px] font-bold text-[#1a5c3a] uppercase tracking-widest mb-2">How it works</p>
      <h2 className="text-[28px] md:text-[32px] font-light tracking-tight text-[#0a0f0c] mb-6">
        Simple from <span className="font-semibold">start to finish</span>
      </h2>

      <div className="w-full h-px bg-gradient-to-r from-[#a8d4bc] to-transparent mb-8" />

      <div className="grid sm:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={i}>
            <p className="text-[36px] font-light text-[#a8d4bc] tracking-tight mb-3">{s.num}</p>
            <h3 className="text-[14px] font-semibold text-[#0a0f0c] mb-2">{s.title}</h3>
            <p className="text-[12px] text-[#3d4f45] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}