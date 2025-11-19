import SectionHeading from "@/components/shared/SectionHeading";

interface IndustriesProps {
  title: string;
  list: string[];
}

export default function Industries({ title, list }: IndustriesProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading title={title} centered />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {list.map((industry, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <span className="text-center font-medium text-zinc-700">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
