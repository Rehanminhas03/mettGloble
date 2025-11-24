"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const services = [
  { label: "Amazon & eCommerce", href: "/services/amazon-ecommerce" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "Procurement & Manufacturing", href: "/services/procurement" },
  { label: "Supply Chain & Logistics", href: "/services/supply-chain" },
  { label: "B2B Lead Generation", href: "/services/leadgen" },
  { label: "Branding & Marketing", href: "/services/branding" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Customer Support", href: "/services/customer-support" },
  { label: "IT Help Desk", href: "/services/it-helpdesk" },
  { label: "Data Entry & VA", href: "/services/data-entry" },
];

export default function Navbar({ site }: { site: { name: string; logo?: string; social?: any } }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/98 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/95 shadow-lg shadow-black/20 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              {site.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={site.logo}
                  alt={site.name}
                  className="h-16 w-auto transition-all duration-300 group-hover:scale-105 brightness-110 contrast-110 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />
              ) : (
                <div className="text-xl font-bold gradient-text-primary">{site.name}</div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex items-center">
            <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-zinc-300 hover:text-purple-400 transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-medium text-zinc-300 hover:text-purple-400 transition-colors flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 glass rounded-lg shadow-xl border border-zinc-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/case-studies" className="text-sm font-medium text-zinc-300 hover:text-purple-400 transition-colors">
              Case Studies
            </Link>
            <Link href="/blog" className="text-sm font-medium text-zinc-300 hover:text-purple-400 transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Button + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="rounded-full gradient-primary px-6 py-2 text-sm font-medium text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <svg className="w-6 h-6 text-zinc-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-purple-400 py-2">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-zinc-300 hover:text-purple-400 py-2">
                About
              </Link>
              <Link href="/services" className="text-sm font-medium text-zinc-300 hover:text-purple-400 py-2">
                Services
              </Link>
              <Link href="/case-studies" className="text-sm font-medium text-zinc-300 hover:text-purple-400 py-2">
                Case Studies
              </Link>
              <Link href="/blog" className="text-sm font-medium text-zinc-300 hover:text-purple-400 py-2">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium text-purple-400 hover:text-purple-300 py-2">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
