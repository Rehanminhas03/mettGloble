import { Metadata } from "next";
import services from "@/content/services.json";
import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import { generatePageMetadata } from "@/lib/seo";
import Link from "next/link";

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
  const gradients = ["gradient-primary", "gradient-secondary", "gradient-accent"];

  return (
    <main>
      <PageHeader
        title="Our Services"
        description={services.intro}
      />

      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.departments.map((service: any, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative glass rounded-2xl p-8 hover-glow transition-all duration-300"
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-xl ${gradients[index % gradients.length]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white text-2xl font-bold">
                    {service.title.charAt(0)}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text-primary transition-all">
                  {service.title}
                </h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  {service.excerpt}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-purple-400 font-medium group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950"></div>
        <div className="absolute inset-0 animated-gradient opacity-40"></div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
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
