const steps = [
  {
    step: "01",
    title: "Create your event",
    desc: "Set a date, location, and cover image. Choose public or private — done in under a minute.",
  },
  {
    step: "02",
    title: "Invite or discover",
    desc: "Invite your circle directly, or let anyone find and join your public event.",
  },
  {
    step: "03",
    title: "Coordinate together",
    desc: "RSVP, split expenses, and chat — all inside the event. No more scattered group chats.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-16">
          <p className="text-xs text-[#7C6FFF] uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F0EDE8] tracking-tight">
            Simple from start to finish
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-4 left-[calc(100%_-_1rem)] w-full h-px bg-gradient-to-r from-[#7C6FFF]/30 to-transparent" />
              )}
              <div className="text-4xl font-semibold text-[#7C6FFF]/15 mb-4 tracking-tight">{s.step}</div>
              <h3 className="text-[#F0EDE8] font-medium mb-2">{s.title}</h3>
              <p className="text-sm text-[#F0EDE8]/40 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}