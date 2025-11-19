import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";

export default function ServiceLayout({ content }: { content: any }) {
  return (
    <div className="py-12">
      <SectionHeading title={content.title || "Service"} subtitle={content.summary} />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          {content.sections?.map((section: any, idx: number) => (
            <section key={idx} className="mb-8">
              <h3 className="mb-2 text-2xl font-semibold">{section.title}</h3>
              <p className="text-zinc-700">{section.body}</p>
            </section>
          ))}
        </div>
        <aside className="rounded-lg border bg-white p-6">
          <h4 className="mb-2 font-semibold">Why choose us</h4>
          <p className="text-sm text-zinc-600">Proven results, global reach, and end-to-end services.</p>
          <div className="mt-4">
            <Button href="/contact">Talk to an Expert</Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
