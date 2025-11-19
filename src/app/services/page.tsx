import { Metadata } from "next";
import services from "@/content/services.json";
import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services - Complete Business Solutions",
  description: "Explore our comprehensive services: Amazon & eCommerce management, web development, cybersecurity, AI automation, procurement, supply chain, lead generation, branding, customer support, and more.",
  path: "/services",
  keywords: [
    "business services",
    "eCommerce services",
    "web development services",
    "cybersecurity services",
    "AI services",
    "outsourcing Pakistan",
  ],
});

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Our Services"
        description={services.intro}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.departments.map((service: any) => (
              <Card
                key={service.slug}
                title={service.title}
                description={service.excerpt}
                href={`/services/${service.slug}`}
                icon={service.title.charAt(0)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-blue-50 mb-10">
            Let's discuss how we can help you achieve your goals.
          </p>
          <Button href={services.cta.href} variant="secondary" size="lg">
            {services.cta.text}
          </Button>
        </div>
      </section>
    </main>
  );
}
