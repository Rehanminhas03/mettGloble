interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="relative bg-zinc-950 py-16 md:py-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-purple-500/30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-cyan-500/30"></div>
      </div>

      <div className="container-custom relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-zinc-400">
            {breadcrumbs.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {item.href ? (
                  <a href={item.href} className="hover:text-purple-400 transition-colors">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-zinc-300">{item.label}</span>
                )}
                {index < breadcrumbs.length - 1 && <span className="text-zinc-600">/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 gradient-text-primary">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
