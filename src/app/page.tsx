import { Metadata } from "next";
import homeContent from "@/content/home.json";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Industries from "@/components/home/Industries";
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
      <Hero
        headline={homeContent.hero.headline}
        subheading={homeContent.hero.subheading}
        cta={homeContent.hero.cta}
      />

      <ServicesGrid services={homeContent.services} />

      <WhyChooseUs
        title={homeContent.whyChooseUs.title}
        reasons={homeContent.whyChooseUs.reasons}
      />

      <Industries
        title={homeContent.industries.title}
        list={homeContent.industries.list}
      />

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
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

      <CTA
        title={homeContent.finalCta.title}
        description={homeContent.finalCta.description}
        buttons={homeContent.finalCta.buttons}
      />
    </main>
  );
}
