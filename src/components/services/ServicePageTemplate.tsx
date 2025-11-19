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
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <p className="text-xl text-zinc-600 leading-relaxed">{content.introduction}</p>
          </div>
        </section>
      )}

      {content.services && content.services.length > 0 && (
        <section className="section-padding bg-zinc-50">
          <div className="container-custom">
            <SectionHeading title="Our Services" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.services.map((service, index) => (
                <Card key={index} title={service.title} className="h-full">
                  <p className="text-zinc-600 mb-4">{service.description}</p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600">
                          <span className="text-emerald-600 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.whyChooseUs && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeading title={content.whyChooseUs.title} centered />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {content.whyChooseUs.reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-zinc-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.technologies && (
        <section className="section-padding bg-zinc-50">
          <div className="container-custom">
            <SectionHeading title={content.technologies.title} centered />
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {content.technologies.list.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full bg-white border border-zinc-200 text-zinc-700 font-medium hover:border-blue-300 hover:shadow-md transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {content.cta.title}
            </h2>
            <p className="text-xl text-blue-50 mb-10">{content.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={content.cta.buttons.primary.href} variant="secondary" size="lg">
                {content.cta.buttons.primary.text}
              </Button>
              {content.cta.buttons.secondary && (
                <Button
                  href={content.cta.buttons.secondary.href}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  {content.cta.buttons.secondary.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
