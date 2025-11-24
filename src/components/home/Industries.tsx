import SectionHeading from "@/components/shared/SectionHeading";

interface IndustriesProps {
  title: string;
  list: string[];
}

export default function Industries({ title, list }: IndustriesProps) {
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

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl bg-cyan-500/10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl bg-purple-500/10"></div>

      <div className="container-custom relative z-10">
        <SectionHeading title={title} centered />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {list.map((industry, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-6 rounded-xl glass hover-glow transition-all duration-300 min-h-[100px]"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all"></div>

              {/* Decorative corner dots */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-purple-500/30 group-hover:bg-purple-500/60 transition-colors"></div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-500/30 group-hover:bg-cyan-500/60 transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-cyan-500/30 group-hover:bg-cyan-500/60 transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-purple-500/30 group-hover:bg-purple-500/60 transition-colors"></div>

              {/* Industry icon placeholder - first letter in gradient circle */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 flex items-center justify-center transition-all opacity-30 group-hover:opacity-50">
                <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {industry.charAt(0)}
                </span>
              </div>

              {/* Industry name */}
              <span className="relative z-10 text-center font-semibold text-sm text-zinc-300 group-hover:text-white group-hover:gradient-text-primary transition-all pt-6">
                {industry}
              </span>

              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-3/4 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
