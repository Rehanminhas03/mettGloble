import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import { generatePageMetadata } from "@/lib/seo";
import blogData from "@/content/blog.json";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog & Insights - Expert Knowledge & Industry Trends",
  description: "Stay informed with expert insights, industry trends, and actionable strategies for eCommerce, technology, cybersecurity, procurement, and business growth.",
  path: "/blog",
  keywords: [
    "blog",
    "eCommerce insights",
    "technology trends",
    "business tips",
    "industry news",
  ],
});

export default function BlogPage() {
  const featuredPosts = blogData.posts.filter(post => post.featured);
  const regularPosts = blogData.posts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "eCommerce": "bg-purple-500/20 text-purple-400",
      "Cybersecurity": "bg-red-500/20 text-red-400",
      "AI & Automation": "bg-cyan-500/20 text-cyan-400",
      "Web Development": "bg-blue-500/20 text-blue-400",
      "Marketing": "bg-pink-500/20 text-pink-400",
      "Procurement": "bg-orange-500/20 text-orange-400",
      "Branding": "bg-green-500/20 text-green-400",
    };
    return colors[category] || "bg-purple-500/20 text-purple-400";
  };

  return (
    <main>
      <PageHeader
        title="Blog & Insights"
        description="Stay informed with expert insights, industry trends, and actionable strategies for eCommerce, technology, cybersecurity, procurement, and business growth."
      />

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section-padding bg-zinc-950">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-white mb-8 gradient-text-primary">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group glass rounded-2xl overflow-hidden hover-glow transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="text-6xl">📝</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span className="text-sm text-zinc-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text-primary transition-all">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                      <div>
                        <p className="text-sm font-medium text-zinc-300">{post.author.name}</p>
                        <p className="text-xs text-zinc-500">{post.author.role}</p>
                      </div>
                      <div className="flex items-center text-purple-400 font-medium group-hover:gap-2 transition-all">
                        <span className="text-sm">Read</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding bg-zinc-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass rounded-2xl overflow-hidden hover-glow transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-6xl">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-zinc-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text-primary transition-all">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <div>
                      <p className="text-sm font-medium text-zinc-300">{post.author.name}</p>
                      <p className="text-xs text-zinc-500">{post.author.role}</p>
                    </div>
                    <div className="flex items-center text-purple-400 font-medium group-hover:gap-2 transition-all">
                      <span className="text-sm">Read</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950"></div>
        <div className="absolute inset-0 animated-gradient opacity-40"></div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Stay Updated?
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
            Get expert insights and industry trends delivered to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full gradient-secondary px-8 py-4 text-lg font-medium text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </main>
  );
}
