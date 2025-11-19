import Link from "next/link";

interface CardProps {
  title?: string;
  description?: string;
  icon?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  title,
  description,
  icon,
  href,
  children,
  className = "",
  hover = true,
}: CardProps) {
  const cardContent = (
    <>
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
          <span className="text-xl font-bold">{icon}</span>
        </div>
      )}
      {title && <h3 className="mb-2 text-xl font-semibold text-zinc-900">{title}</h3>}
      {description && <p className="text-zinc-600 leading-relaxed">{description}</p>}
      {children}
    </>
  );

  const baseClasses = `rounded-xl border border-zinc-200 bg-white p-6 ${
    hover ? "card-hover" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${baseClasses}`}>
        {cardContent}
      </Link>
    );
  }

  return <div className={baseClasses}>{cardContent}</div>;
}
