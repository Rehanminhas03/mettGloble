import React from "react";

interface Partner {
  name: string;
  logo?: string;
}

interface PartnersProps {
  partners: Partner[];
}

export default function Partners({ partners }: PartnersProps) {
  return (
    <section className="relative section-padding overflow-hidden bg-zinc-950">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-cyan-400 mb-4">
            Trusted By
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text-secondary">Partners</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Proud to work with industry-leading companies and innovative startups around the globe.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-6 rounded-xl glass hover-glow transition-all duration-300 h-24"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 transition-opacity"></div>

              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                />
              ) : (
                <div className="flex flex-col items-center justify-center relative z-10">
                  {/* Logo-style icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-2 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-zinc-500 group-hover:text-zinc-300 font-semibold text-xs transition-all text-center">
                    {partner.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
