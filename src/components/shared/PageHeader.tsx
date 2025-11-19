interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 py-16 md:py-24">
      <div className="container-custom">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {item.href ? (
                  <a href={item.href} className="hover:text-blue-600 transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
