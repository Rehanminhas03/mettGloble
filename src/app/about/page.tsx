import { Metadata } from "next";
import aboutContent from "@/content/about.json";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us - Our Story, Vision & Global Team",
  description: "Learn about MettGlobal's journey, vision, and mission to deliver world-class eCommerce, web development, cybersecurity, and business solutions from Pakistan to clients worldwide.",
  path: "/about",
  keywords: [
    "about MettGlobal",
    "company history",
    "Pakistan IT company",
    "our team",
    "our values",
    "global business solutions",
  ],
});

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title={aboutContent.hero.title}
        description={aboutContent.hero.description}
      />

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Vision</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">{aboutContent.vision}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">{aboutContent.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-zinc-50">
        <div className="container-custom max-w-4xl">
          <SectionHeading title="Our Story" centered />
          <p className="text-lg text-zinc-600 leading-relaxed">{aboutContent.story}</p>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Our Team" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.team.map((member, index) => (
              <Card key={index} hover={false}>
                <div className="mb-3 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600" />
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{member.role}</h3>
                <p className="text-sm text-zinc-600">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-zinc-50">
        <div className="container-custom">
          <SectionHeading title="Our Values" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white mb-4">
                  <span className="text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{value.title}</h3>
                <p className="text-zinc-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading title="Why We Are Different" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {aboutContent.whyDifferent.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Global Footprint</h2>
          <p className="text-xl text-blue-50 mb-4">
            <strong>Headquarters:</strong> {aboutContent.footprint.headquarters}
          </p>
          <p className="text-xl text-blue-50 mb-10">
            <strong>Serving Clients In:</strong> {aboutContent.footprint.servingClients}
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Let's Build Your Success Story
          </Button>
        </div>
      </section>
    </main>
  );
}
