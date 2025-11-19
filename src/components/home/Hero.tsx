import Button from "@/components/shared/Button";

interface HeroProps {
  headline: string;
  subheading: string;
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
}

export default function Hero({ headline, subheading, cta }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 md:py-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={cta.primary.href} size="lg">
              {cta.primary.text}
            </Button>
            <Button href={cta.secondary.href} variant="outline" size="lg">
              {cta.secondary.text}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
    </section>
  );
}
