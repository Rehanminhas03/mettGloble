interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center max-w-3xl mx-auto" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-zinc-600 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
