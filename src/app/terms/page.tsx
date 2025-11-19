import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "MettGlobal's terms of service - Please read these terms carefully before using our services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      <PageHeader
        title="Terms of Service"
        description="Please read these terms carefully before using our services."
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl prose prose-zinc">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using our services, you accept and agree to be bound by the terms and conditions of this agreement.
          </p>

          <h2>Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these Terms of Service.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The content, features, and functionality of our services are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at contact@youragency.com.
          </p>

          <p className="text-sm text-zinc-500 mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>
    </main>
  );
}
