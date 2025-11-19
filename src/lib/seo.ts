import { Metadata } from "next";
import website from "@/content/website.json";

export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mettglobal.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${website.name} | ${website.tagline}`,
    template: `%s | ${website.name}`,
  },
  description: website.description,
  keywords: [
    "eCommerce management",
    "Amazon seller services",
    "web development",
    "cybersecurity services",
    "AI automation",
    "procurement services",
    "supply chain management",
    "B2B lead generation",
    "digital marketing",
    "Pakistan IT services",
    "Next.js development",
    "React development",
    "penetration testing",
    "SOC services",
    "customer support outsourcing",
  ],
  authors: [{ name: website.name }],
  creator: website.name,
  publisher: website.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: website.name,
    title: `${website.name} | ${website.tagline}`,
    description: website.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${website.name} - ${website.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${website.name} | ${website.tagline}`,
    description: website.description,
    images: ["/og-image.jpg"],
    creator: "@mettglobal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  alternates: {
    canonical: baseUrl,
  },
};

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
}: PageSEOProps): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords: [...(defaultMetadata.keywords as string[]), ...keywords],
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: website.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@mettglobal",
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateServiceMetadata(
  serviceName: string,
  description: string,
  slug: string
): Metadata {
  return generatePageMetadata({
    title: `${serviceName} Services`,
    description,
    path: `/services/${slug}`,
    keywords: [
      serviceName.toLowerCase(),
      `${serviceName.toLowerCase()} services`,
      "Pakistan",
      "outsourcing",
      "business solutions",
    ],
  });
}

// Organization Schema (JSON-LD)
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: website.name,
    description: website.description,
    url: baseUrl,
    logo: `${baseUrl}${website.logo}`,
    email: website.contact.email,
    telephone: website.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressLocality: website.contact.address,
    },
    sameAs: [
      website.social.facebook,
      website.social.instagram,
      website.social.linkedin,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: website.contact.phone,
      contactType: "Customer Service",
      email: website.contact.email,
      availableLanguage: ["English", "Urdu"],
    },
  };
}

// Service Schema (JSON-LD)
export function getServiceSchema(
  serviceName: string,
  description: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: website.name,
      url: baseUrl,
    },
    url: `${baseUrl}/services/${slug}`,
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${baseUrl}/contact`,
    },
  };
}

// Breadcrumb Schema (JSON-LD)
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

// FAQ Schema (JSON-LD)
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
