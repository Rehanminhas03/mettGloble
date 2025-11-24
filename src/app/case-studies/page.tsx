import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import Button from "@/components/shared/Button";
import { generatePageMetadata } from "@/lib/seo";
import caseStudiesData from "@/content/case-studies.json";

export const metadata: Metadata = generatePageMetadata({
  title: "Case Studies - Client Success Stories",
  description: "Explore our portfolio of successful projects including Amazon product launches, textile sourcing, web development, and more. See how we've helped businesses achieve their goals.",
  path: "/case-studies",
  keywords: [
    "case studies",
    "client success stories",
    "portfolio",
    "project examples",
    "eCommerce success",
  ],
});

export default function CaseStudiesPage() {
  const gradients = ["gradient-primary", "gradient-secondary", "gradient-accent"];
  const featuredCases = caseStudiesData.items.filter(item => item.featured);
  const regularCases = caseStudiesData.items.filter(item => !item.featured);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "eCommerce": "bg-purple-500/20 text-purple-400",
      "Cybersecurity": "bg-red-500/20 text-red-400",
      "AI & Automation": "bg-cyan-500/20 text-cyan-400",
      "Web Development": "bg-blue-500/20 text-blue-400",
      "Marketing": "bg-pink-500/20 text-pink-400",
      "Procurement": "bg-orange-500/20 text-orange-400",
      "Supply Chain": "bg-green-500/20 text-green-400",
      "Branding": "bg-yellow-500/20 text-yellow-400",
    };
    return colors[category] || "bg-purple-500/20 text-purple-400";
  };

  return (
    <main>
      <PageHeader
        title="Case Studies & Success Stories"
        description="Discover how we've helped businesses scale on Amazon, streamline supply chains, build secure digital platforms, and automate operations with AI."
      />

      {/* Featured Case Studies */}
      {featuredCases.length > 0 && (
        <section className="section-padding bg-zinc-950">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-white mb-8 gradient-text-primary">Featured Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCases.map((study, index) => (
                <div key={study.slug} className="group glass rounded-2xl p-8 hover-glow transition-all duration-300">
                  <div className={`w-16 h-16 rounded-xl ${gradients[index % gradients.length]} flex items-center justify-center mb-6 text-white font-bold text-2xl group-hover:scale-110 transition-transform`}>
                    {study.category.charAt(0)}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(study.category)}`}>
                      {study.category}
                    </span>
                    <span className="text-xs text-zinc-500">{study.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text-primary transition-all">{study.title}</h3>
                  <p className="text-zinc-400 mb-4 leading-relaxed">{study.excerpt}</p>
                  <div className="pt-4 border-t border-zinc-800">
                    <p className="text-sm font-medium text-zinc-300 mb-1">{study.client}</p>
                    <p className="text-xs text-zinc-500">{study.industry}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies */}
      <section className="section-padding bg-zinc-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-8">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCases.map((study, index) => (
              <div key={study.slug} className="group glass rounded-2xl p-8 hover-glow transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl ${gradients[index % gradients.length]} flex items-center justify-center mb-6 text-white font-bold text-2xl group-hover:scale-110 transition-transform`}>
                  {study.category.charAt(0)}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(study.category)}`}>
                    {study.category}
                  </span>
                  <span className="text-xs text-zinc-500">{study.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text-primary transition-all">{study.title}</h3>
                <p className="text-zinc-400 mb-4 leading-relaxed">{study.excerpt}</p>
                <div className="pt-4 border-t border-zinc-800">
                  <p className="text-sm font-medium text-zinc-300 mb-1">{study.client}</p>
                  <p className="text-xs text-zinc-500">{study.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Highlights */}
      <section className="section-padding bg-zinc-950">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text-primary mb-2">$150K+</div>
              <p className="text-zinc-400">Annual Savings Generated</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text-secondary mb-2">500+</div>
              <p className="text-zinc-400">Qualified B2B Leads</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text-accent mb-2">60%</div>
              <p className="text-zinc-400">Cost Reduction Average</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold gradient-text-primary mb-2">100%</div>
              <p className="text-zinc-400">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950"></div>
        <div className="absolute inset-0 animated-gradient opacity-40"></div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Your Own Success Story?
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </main>
  );
}
