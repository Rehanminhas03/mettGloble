import Button from "@/components/shared/Button";

interface CTAProps {
  title: string;
  description: string;
  buttons: {
    primary: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
}

export default function CTA({ title, description, buttons }: CTAProps) {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-zinc-950"></div>
      <div className="absolute inset-0 animated-gradient opacity-40"></div>

      {/* Gradient Orbs */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgb(var(--purple)) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgb(var(--pink)) 0%, transparent 70%)",
        }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={buttons.primary.href} variant="secondary" size="lg">
              {buttons.primary.text}
            </Button>
            {buttons.secondary && (
              <Button href={buttons.secondary.href} variant="outline" size="lg" className="border-purple-500/30 text-white hover:bg-purple-500/10">
                {buttons.secondary.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
