"use client";

import Link from "next/link";

function EventCard() {
  return (
    <div className="animate-float w-[300px] bg-[#1A3D2B] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      <div className="h-36 bg-gradient-to-br from-[#2A7A4B]/40 to-[#1A3D2B] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3D2B] to-transparent" />
        <svg className="w-12 h-12 text-[#34D399]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-md bg-[#2A7A4B] flex items-center justify-center text-[9px] font-bold text-white">DH</div>
          <span className="text-[10px] text-[#34D399]">Dhaka Hikers</span>
        </div>
        <h3 className="text-sm font-semibold text-[#E8F0E8] mb-1">Sundarbans Trek — 2 Days</h3>
        <div className="flex items-center gap-3 text-[10px] text-[#E8F0E8]/40 mb-3">
          <span>📅 Aug 12</span>
          <span>📍 Khulna</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1.5">
              {["#2A7A4B", "#34D399", "#A3C4A3"].map((c, i) => (
                <div key={i} className="w-5 h-5 rounded-full border border-[#1A3D2B]" style={{ background: c }} />
              ))}
            </div>
            <span className="text-[10px] text-[#34D399]">+34 going</span>
          </div>
          <button className="text-[10px] bg-[#2A7A4B]/20 text-[#34D399] px-3 py-1 rounded-full">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#2A7A4B]/10 border border-[#2A7A4B]/20 rounded-full px-3 py-1 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
              <span className="text-xs text-[#34D399]">Now available in Bangladesh</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold text-[#E8F0E8] leading-[1.1] tracking-tight mb-6">
              Events that{" "}
              <span className="text-[#34D399]">bring</span>
              <br />people together
            </h1>

            <p className="text-[#A3C4A3] text-lg leading-relaxed mb-8 max-w-md">
              Create, discover and join events with your circle or the world.
              RSVP, split costs, chat — all in one place.
            </p>

            <div className="flex items-center gap-3">
              <Link href="/register" className="bg-[#2A7A4B] hover:bg-[#236040] text-white px-6 py-3 rounded-full text-sm font-medium transition-colors">
                Get started free
              </Link>
              <Link href="#how-it-works" className="text-sm text-[#A3C4A3] hover:text-[#E8F0E8] transition-colors flex items-center gap-1.5">
                See how it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="flex items-center gap-2 mt-8">
              <div className="flex -space-x-2">
                {["#2A7A4B", "#34D399", "#A3C4A3", "#1A3D2B"].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-[#0A0F0A]" style={{ background: c }} />
                ))}
              </div>
              <p className="text-xs text-[#A3C4A3]/70">
                Join <span className="text-[#E8F0E8]">2,000+</span> people already using Feelide
              </p>
            </div>
          </div>

          <div className="hidden md:flex justify-center items-center relative">
            <div className="absolute w-64 h-64 bg-[#2A7A4B]/15 rounded-full blur-3xl" />
            <EventCard />
          </div>
        </div>
      </div>
    </section>
  );
}