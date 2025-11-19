import Card from "@/components/shared/Card";
import SectionHeading from "@/components/shared/SectionHeading";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive solutions for your business growth"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon.charAt(0)}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
