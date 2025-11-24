"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface HeroProps {
  headline: string;
  subheading: string;
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
}

export default function ModernHero({ headline, subheading, cta }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-30"></div>

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgb(var(--purple)) 0%, transparent 70%)",
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      <div
        className="absolute top-1/3 -right-48 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgb(var(--pink)) 0%, transparent 70%)",
          transform: `translate(-${mousePosition.x * 0.03}px, -${mousePosition.y * 0.03}px)`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgb(var(--cyan)) 0%, transparent 70%)",
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 pulse-glow"></span>
          <span className="text-sm text-zinc-300">Welcome to MettGlobal</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in">
          <span className="gradient-text-primary">{headline.split(" ").slice(0, 3).join(" ")}</span>
          <br />
          <span className="text-white">{headline.split(" ").slice(3).join(" ")}</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 fade-in leading-relaxed">
          {subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
          <Link
            href={cta.primary.href}
            className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden hover-glow"
          >
            <span className="absolute inset-0 gradient-primary"></span>
            <span className="relative z-10 flex items-center gap-2">
              {cta.primary.text}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>

          <Link
            href={cta.secondary.href}
            className="group px-8 py-4 rounded-full font-semibold text-white border border-zinc-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="flex items-center gap-2">
              {cta.secondary.text}
              <svg
                className="w-5 h-5 group-hover:rotate-45 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "200+", label: "Happy Clients" },
            { number: "50+", label: "Team Members" },
            { number: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover-glow">
              <div className="text-3xl md:text-4xl font-bold gradient-text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
