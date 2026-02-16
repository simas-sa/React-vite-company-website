import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "react-hooks",
    title: "راهنمای کامل React Hooks",
    excerpt: "آشنایی با useState و useEffect و سایر هوک‌ها...",
    image: "/images/react-hooks.jpg",
    category: "React",
    date: "آبان ۱۴۰۴",
  },
  {
    slug: "ui-ux-tips",
    title: "نکات طلایی UI/UX",
    excerpt: "چطور تجربه کاربری بهتر بسازیم...",
    image: "/images/ui-ux.jpg",
    category: "Design",
    date: "آذر ۱۴۰۴",
  },
  {
    slug: "nextjs-performance",
    title: "بهینه‌سازی عملکرد در Next.js",
    excerpt: "افزایش سرعت با Image Optimization و Static Generation...",
    image: "/images/nextjs.jpg",
    category: "Next.js",
    date: "آذر ۱۴۰۴",
  },
];

export default function BlogPreview() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        آخرین مقالات
      </h2>

      {/* کارت‌ها */}
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard
            key={post.slug}
            image={post.image}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            category={post.category}
            date={post.date}
            delay={index * 0.2}
          />
        ))}
      </div>

      {/* دکمه مشاهده همه مقالات */}
      <div className="mt-12 text-center">
        <Link
          to="/blog"
          className="inline-block rounded-lg border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
        >
          مشاهده همه مقالات
        </Link>
      </div>
    </section>
  );
}
