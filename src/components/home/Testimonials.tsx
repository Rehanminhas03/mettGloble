import React from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
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
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-400 mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="gradient-text-primary">Clients Say</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from businesses we've helped transform with our solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 hover-glow transition-all duration-300"
            >
              {/* Large Quote Icon */}
              <div className="absolute top-6 right-6 text-purple-500/10 group-hover:text-purple-500/20 transition-colors">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-zinc-300 mb-6 leading-relaxed italic relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Info with enhanced avatar */}
              <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-zinc-800">
                <div className="relative">
                  {/* Avatar glow */}
                  <div className="absolute inset-0 rounded-full gradient-primary opacity-20 blur-lg"></div>
                  {/* Avatar */}
                  <div className="relative w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    <div className="absolute inset-0 rounded-full opacity-10"
                         style={{
                           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                           backgroundSize: '8px 8px'
                         }}>
                    </div>
                    <span className="relative z-10">{testimonial.name.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:gradient-text-primary transition-all">{testimonial.name}</div>
                  <div className="text-sm text-zinc-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
