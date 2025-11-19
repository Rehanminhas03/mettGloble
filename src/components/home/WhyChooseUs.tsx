import SectionHeading from "@/components/shared/SectionHeading";

interface Reason {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsProps {
  title: string;
  reasons: Reason[];
}

export default function WhyChooseUs({ title, reasons }: WhyChooseUsProps) {
  return (
    <section className="section-padding bg-zinc-50">
      <div className="container-custom">
        <SectionHeading title={title} centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{reason.title}</h3>
              <p className="text-zinc-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
