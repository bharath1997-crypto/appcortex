// components/pricing/TestimonialsSection.tsx
"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui";

const testimonials = [
  {
    id: 1,
    quote: "We scaled from 0→5M installs after tracking competitors via AppCortex. The AI insights alone saved us months of guesswork.",
    author: "Nova Studios",
    role: "Founder, AI Tools",
    avatar: "🧑‍💻",
    country: "India",
  },
  {
    id: 2,
    quote: "Better forecasting than SensorTower for half the cost. The ROI was clear within the first month.",
    author: "FintechCo",
    role: "VP Product, Fintech Investor",
    avatar: "💼",
    country: "UAE",
  },
  {
    id: 3,
    quote: "Reliable API + great support. We integrated AppCortex into our investor dashboard and it just works.",
    author: "AI Tools Hub",
    role: "CTO, Developer Platform",
    avatar: "🏆",
    country: "USA",
  },
  {
    id: 4,
    quote: "The developer community features are amazing. We found our first 10 beta testers through the forum.",
    author: "FitAI Labs",
    role: "Co-founder, Health & Fitness",
    avatar: "💡",
    country: "UK",
  },
];

const partnerLogos = [
  { name: "Google Play", icon: "📱" },
  { name: "AWS", icon: "☁️" },
  { name: "IndieDev", icon: "🚀" },
  { name: "Deakin Uni", icon: "🎓" },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Auto-rotate every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-2">
          Trusted by Developers & Investors
        </h2>
        <p className="text-sm text-slate-400">
          See why teams choose AppCortex for app market intelligence
        </p>
      </div>

      {/* Main Testimonial Carousel */}
      <Card className="p-8 md:p-10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-slate-700 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Avatar */}
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-3xl shadow-lg">
            {current.avatar}
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div>
            <div className="text-base font-semibold text-slate-50">{current.author}</div>
            <div className="text-sm text-slate-400">{current.role}</div>
            <div className="text-xs text-slate-500 mt-1">{current.country}</div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-cyan-500"
                  : "w-2 bg-slate-700 hover:bg-slate-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Card>

      {/* Partner Logos */}
      <div>
        <p className="text-xs text-slate-500 text-center mb-4">
          Trusted partners & ecosystem
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-3xl">{partner.icon}</span>
              <span className="text-xs text-slate-400">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

