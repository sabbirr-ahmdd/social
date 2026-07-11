const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Public & Private Events",
    desc: "Host intimate gatherings for your circle or open events for anyone to discover and join.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "RSVP & Expense Split",
    desc: "See who's coming in real time. Split costs instantly — pay via SSLCommerz, card, or manually.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Event Chat",
    desc: "Every event has its own chat. Coordinate without the chaos of group messages.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-16">
          <p className="text-xs text-[#7C6FFF] uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#F0EDE8] tracking-tight">
            Everything your event needs
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i} className="bg-[#1A1A2E]/60 border border-white/5 rounded-2xl p-6 hover:border-[#7C6FFF]/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-[#7C6FFF]/10 text-[#7C6FFF] flex items-center justify-center mb-4 group-hover:bg-[#7C6FFF]/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-[#F0EDE8] font-medium mb-2">{f.title}</h3>
              <p className="text-sm text-[#F0EDE8]/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}