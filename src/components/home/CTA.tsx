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
    <section className="section-padding bg-gradient-to-r from-blue-600 to-emerald-600">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-blue-50 mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={buttons.primary.href} variant="secondary" size="lg">
              {buttons.primary.text}
            </Button>
            {buttons.secondary && (
              <Button href={buttons.secondary.href} variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                {buttons.secondary.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
