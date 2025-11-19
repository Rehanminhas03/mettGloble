import blog from "@/content/blog.json";
import SectionHeading from "@/components/shared/SectionHeading";

const blogData: any = blog;

type Props = { params: { slug: string } };

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = (blogData.posts || []).find((p: any) => p.slug === slug);
  if (!post) {
    return (
      <main className="py-12">
        <h1 className="text-2xl font-semibold">Post not found</h1>
      </main>
    );
  }

  return (
    <main className="py-12">
      <SectionHeading title={post.title} subtitle={post.date} />
      <article className="prose max-w-none">{post.content}</article>
    </main>
  );
}
