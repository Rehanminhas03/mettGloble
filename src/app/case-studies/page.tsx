import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import { generatePageMetadata } from "@/lib/seo";

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

const caseStudies = [
  {
    title: "Amazon Product Launch Success",
    description: "$50K/month in sales within 6 months with 4.8-star rating",
    category: "eCommerce"
  },
  {
    title: "Textile Sourcing & Export",
    description: "Successful production of 10,000 units with zero defects",
    category: "Procurement"
  },
  {
    title: "Website Development for Retail Store",
    description: "$20K in online sales within first 3 months",
    category: "Web Development"
  }
];

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHeader
        title="Case Studies & Success Stories"
        description="Discover how we've helped businesses scale on Amazon, streamline supply chains, build secure digital platforms, and automate operations with AI."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index} title={study.title} description={study.description} hover={false}>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                    {study.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Your Own Success Story?
          </h2>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
}
