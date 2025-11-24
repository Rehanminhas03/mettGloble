import React from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

interface TeamProps {
  members: TeamMember[];
}

export default function Team({ members }: TeamProps) {
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
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-orange-400 mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet The <span className="gradient-text-accent">Experts</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Our talented team of professionals is dedicated to delivering excellence and driving innovation for your business.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-6 text-center hover-glow transition-all duration-300"
            >
              {/* Avatar with enhanced visuals */}
              <div className="relative mb-6">
                {/* Outer glow ring */}
                <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full gradient-accent opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>

                {/* Decorative border ring */}
                <div className="absolute inset-0 w-24 h-24 mx-auto">
                  <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 group-hover:border-purple-500/40 transition-colors animate-pulse"></div>
                </div>

                {/* Main avatar */}
                <div className="relative w-24 h-24 mx-auto rounded-full gradient-accent flex items-center justify-center text-white font-bold text-3xl overflow-hidden group-hover:scale-110 transition-transform shadow-xl">
                  {/* Geometric pattern overlay */}
                  <div className="absolute inset-0 opacity-10"
                       style={{
                         backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                         backgroundSize: '10px 10px'
                       }}>
                  </div>
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover relative z-10" />
                  ) : (
                    <span className="relative z-10">{member.name.charAt(0)}</span>
                  )}
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:gradient-text-primary transition-all">
                {member.name}
              </h3>
              <p className="text-purple-400 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{member.bio}</p>

              {/* Social Links */}
              {member.social && (
                <div className="flex gap-3 justify-center">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-purple-500 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-cyan-500 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
