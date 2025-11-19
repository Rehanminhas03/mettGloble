import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "MettGlobal's privacy policy - Learn how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us."
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-zinc">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy describes how we collect, use, and protect your personal information.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at contact@youragency.com.
          </p>

          <p className="text-sm text-zinc-500 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>
    </main>
  );
}
