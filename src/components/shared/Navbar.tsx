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
    <header className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-zinc-900/80 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {site.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={site.logo} alt={site.name} className="h-8 w-auto" />
              ) : (
                <div className="text-lg font-bold gradient-text">{site.name}</div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex items-center">
            <Link href="/" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-zinc-800 rounded-lg shadow-xl border border-zinc-200 dark:border-zinc-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-blue-50 dark:hover:bg-zinc-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/case-studies" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Case Studies
            </Link>
            <Link href="/blog" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Button + Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-500 dark:to-emerald-500 px-6 py-2 text-sm font-medium text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <svg className="w-6 h-6 text-zinc-900 dark:text-zinc-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">
                About
              </Link>
              <Link href="/services" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">
                Services
              </Link>
              <Link href="/case-studies" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">
                Case Studies
              </Link>
              <Link href="/blog" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-2">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
