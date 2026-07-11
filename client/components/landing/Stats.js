const highlights = [
  { icon: "🌍", text: "Built for everyone" },
  { icon: "⚡", text: "Set up in minutes" },
  { icon: "🔒", text: "Private by default" },
  { icon: "💸", text: "100% free to use" },
];

export default function Stats() {
  return (
    <div className="bg-[#1f6b45] rounded-3xl px-6 py-8 grid grid-cols-2 sm:grid-cols-4">
      {highlights.map((h, i) => (
        <div
          key={i}
          className={`text-center py-3 ${i < highlights.length - 1 ? "border-r border-white/20" : ""}`}
        >
          <p className="text-[26px] mb-2">{h.icon}</p>
          <p className="text-[12px] font-semibold text-white leading-snug px-2">{h.text}</p>
        </div>
      ))}
    </div>
  );
}