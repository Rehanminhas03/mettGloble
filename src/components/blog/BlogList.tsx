import Link from "next/link";

export default function BlogList({ posts }: { posts: any[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-lg border bg-white p-6 hover:shadow">
          <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
          <p className="text-sm text-zinc-600">{p.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}
