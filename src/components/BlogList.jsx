import { Link } from "react-router-dom";

const posts = [
  { slug: "react-hooks", title: "راهنمای کامل React Hooks" },
  { slug: "ui-ux-tips", title: "نکات طلایی UI/UX" },
  { slug: "nextjs-performance", title: "بهینه‌سازی عملکرد در Next.js" },
];

export default function BlogList() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold mb-6">آخرین مقالات</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="text-indigo-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
