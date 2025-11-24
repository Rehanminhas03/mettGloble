import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";

interface ServiceContent {
  hero: {
    headline: string;
    subheading: string;
    cta: {
      primary: { text: string; href: string };
      secondary?: { text: string; href: string };
    };
  };
  introduction?: string;
  services?: Array<{
    title: string;
    description: string;
    features?: string[];
  }>;
  whyChooseUs?: {
    title: string;
    reasons: string[];
  };
  technologies?: {
    title: string;
    list: string[];
  };
  cta: {
    title: string;
    description: string;
    buttons: {
      primary: { text: string; href: string };
      secondary?: { text: string; href: string };
    };
  };
}

interface ServicePageTemplateProps {
  content: ServiceContent;
  slug: string;
}

export default function ServicePageTemplate({ content, slug }: ServicePageTemplateProps) {
  const gradients = ["gradient-primary", "gradient-secondary", "gradient-accent"];

  return (
    <main>
      <PageHeader
        title={content.hero.headline}
        description={content.hero.subheading}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: content.hero.headline },
        ]}
      />

      {content.introduction && (
        <section className="section-padding bg-zinc-950">
          <div className="container-custom max-w-4xl">
            <div className="glass rounded-2xl p-8">
              <p className="text-xl text-zinc-300 leading-relaxed">{content.introduction}</p>
            </div>
          </div>
        </section>
      )}

      {content.services && content.services.length > 0 && (
        <section className="section-padding bg-zinc-900">
          <div className="container-custom">
            <SectionHeading title="Our Services" centered />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {content.services.map((service, index) => (
                <div key={index} className="glass rounded-2xl p-8 hover-glow transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl ${gradients[index % gradients.length]} flex items-center justify-center mb-6 text-white font-bold text-2xl`}>
                    {service.title.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{service.description}</p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-zinc-300">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold mt-1">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.whyChooseUs && (
        <section className="section-padding bg-zinc-950">
          <div className="container-custom">
            <SectionHeading title={content.whyChooseUs.title} centered />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {content.whyChooseUs.reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 glass rounded-xl p-4 hover-glow transition-all duration-300">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-zinc-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.technologies && (
        <section className="section-padding bg-zinc-900">
          <div className="container-custom">
            <SectionHeading title={content.technologies.title} centered />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {content.technologies.list.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full glass text-zinc-300 font-medium hover:bg-purple-500/20 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950"></div>
        <div className="absolute inset-0 animated-gradient opacity-40"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
             style={{background: "radial-gradient(circle, rgb(var(--purple)) 0%, transparent 70%)"}}>
        </div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
             style={{background: "radial-gradient(circle, rgb(var(--cyan)) 0%, transparent 70%)"}}>
        </div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {content.cta.title}
          </h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-3xl mx-auto">{content.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={content.cta.buttons.primary.href} variant="secondary" size="lg">
              {content.cta.buttons.primary.text}
            </Button>
            {content.cta.buttons.secondary && (
              <Button
                href={content.cta.buttons.secondary.href}
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-500/10"
              >
                {content.cta.buttons.secondary.text}
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
