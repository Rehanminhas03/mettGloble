import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Card from "@/components/shared/Card";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog & Insights - Expert Knowledge & Industry Trends",
  description: "Stay informed with expert insights, industry trends, and actionable strategies for eCommerce, technology, cybersecurity, procurement, and business growth.",
  path: "/blog",
  keywords: [
    "blog",
    "eCommerce insights",
    "technology trends",
    "business tips",
    "industry news",
  ],
});

export default function BlogPage() {
  return (
    <main>
      <PageHeader
        title="Blog & Insights"
        description="Stay informed with expert insights, industry trends, and actionable strategies for eCommerce, technology, cybersecurity, procurement, and business growth."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center py-12">
            <p className="text-xl text-zinc-600">Blog posts coming soon...</p>
          </div>
        </div>
      </section>
    </main>
  );
}
