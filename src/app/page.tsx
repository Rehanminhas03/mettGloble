import { Metadata } from "next";
import homeContent from "@/content/home.json";
import extendedContent from "@/content/homepage-extended.json";
import ModernHero from "@/components/home/ModernHero";
import ModernServicesGrid from "@/components/home/ModernServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Team from "@/components/home/Team";
import Partners from "@/components/home/Partners";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Home - Your Global Partner for eCommerce, AI, Web Dev & More",
  description: "MettGlobal provides end-to-end business solutions including Amazon & eCommerce management, web development, cybersecurity, AI automation, procurement, and global logistics services from Pakistan.",
  path: "/",
  keywords: [
    "eCommerce solutions",
    "Amazon FBA",
    "web development agency",
    "cybersecurity Pakistan",
    "AI automation services",
    "business process outsourcing",
    "Pakistan IT company",
  ],
});

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <ModernHero
        headline={homeContent.hero.headline}
        subheading={homeContent.hero.subheading}
        cta={homeContent.hero.cta}
      />

      {/* Services Grid */}
      <ModernServicesGrid services={homeContent.services} />

      {/* Partners/Clients */}
      <Partners partners={extendedContent.partners} />

      {/* Why Choose Us */}
      <WhyChooseUs
        title={homeContent.whyChooseUs.title}
        reasons={homeContent.whyChooseUs.reasons}
      />

      {/* Our Process */}
      <Process steps={extendedContent.process} />

      {/* Industries */}
      <Industries
        title={homeContent.industries.title}
        list={homeContent.industries.list}
      />

      {/* Testimonials */}
      <Testimonials testimonials={extendedContent.testimonials} />

      {/* Team */}
      <Team members={extendedContent.team} />

      {/* Case Studies Section */}
      <section className="section-padding bg-zinc-900">
        <div className="container-custom">
          <SectionHeading
            title={homeContent.caseStudies.title}
            subtitle={homeContent.caseStudies.description}
            centered
          />
          <div className="text-center mt-8">
            <Button href={homeContent.caseStudies.cta.href} variant="outline">
              {homeContent.caseStudies.cta.text}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={extendedContent.faqs} />

      {/* Final CTA */}
      <CTA
        title={homeContent.finalCta.title}
        description={homeContent.finalCta.description}
        buttons={homeContent.finalCta.buttons}
      />
    </main>
  );
}
