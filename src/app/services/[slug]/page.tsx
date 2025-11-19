import fs from "fs";
import path from "path";
import { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { notFound } from "next/navigation";
import { generateServiceMetadata, getServiceSchema, getBreadcrumbSchema } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Generate metadata for each service page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const contentDir = path.join(process.cwd(), "src", "content", "service-pages");
  const filePath = path.join(contentDir, `${slug}.json`);

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const content = JSON.parse(raw);

    return generateServiceMetadata(
      content.hero?.headline || content.title,
      content.hero?.subheading || content.introduction || "",
      slug
    );
  } catch (err) {
    return {};
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  // Resolve content file by slug from content/service-pages
  const contentDir = path.join(process.cwd(), "src", "content", "service-pages");
  const filePath = path.join(contentDir, `${slug}.json`);

  let content = null;
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    content = JSON.parse(raw);
  } catch (err) {
    notFound();
  }

  // Generate structured data
  const serviceSchema = getServiceSchema(
    content.hero?.headline || content.title,
    content.hero?.subheading || content.introduction || "",
    slug
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: content.hero?.headline || content.title, url: `/services/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePageTemplate content={content} slug={slug} />
    </>
  );
}

// Generate static params for all service pages
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src", "content", "service-pages");
  const files = fs.readdirSync(contentDir);

  return files
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      slug: file.replace('.json', '')
    }));
}
