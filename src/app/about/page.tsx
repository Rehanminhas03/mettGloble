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
  const gradients = ["gradient-primary", "gradient-secondary", "gradient-accent"];

  return (
    <main>
      <PageHeader
        title={aboutContent.hero.title}
        description={aboutContent.hero.description}
      />

      {/* Vision & Mission */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text-primary">Our Vision</h2>
              <p className="text-lg text-zinc-300 leading-relaxed">{aboutContent.vision}</p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text-secondary">Our Mission</h2>
              <p className="text-lg text-zinc-300 leading-relaxed">{aboutContent.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-zinc-900">
        <div className="container-custom max-w-4xl">
          <SectionHeading title="Our Story" centered />
          <div className="glass rounded-2xl p-8">
            <p className="text-lg text-zinc-300 leading-relaxed">{aboutContent.story}</p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <SectionHeading title="Our Team" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.team.map((member, index) => (
              <div key={index} className="glass rounded-2xl p-6 hover-glow transition-all duration-300">
                <div className={`mb-4 w-16 h-16 rounded-full ${gradients[index % gradients.length]} flex items-center justify-center text-white font-bold text-2xl`}>
                  {member.role.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{member.role}</h3>
                <p className="text-sm text-zinc-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-zinc-900">
        <div className="container-custom">
          <SectionHeading title="Our Values" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value, index) => (
              <div key={index} className="text-center glass rounded-2xl p-6 hover-glow transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${gradients[index % gradients.length]} text-white mb-4`}>
                  <span className="text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <SectionHeading title="Why We Are Different" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {aboutContent.whyDifferent.map((item, index) => (
              <div key={index} className="flex items-start gap-3 glass rounded-xl p-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <p className="text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950"></div>
        <div className="absolute inset-0 animated-gradient opacity-40"></div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Global Footprint</h2>
          <p className="text-xl text-zinc-300 mb-4">
            <strong className="text-purple-400">Headquarters:</strong> {aboutContent.footprint.headquarters}
          </p>
          <p className="text-xl text-zinc-300 mb-10">
            <strong className="text-purple-400">Serving Clients In:</strong> {aboutContent.footprint.servingClients}
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Let's Build Your Success Story
          </Button>
        </div>
      </section>
    </main>
  );
}
