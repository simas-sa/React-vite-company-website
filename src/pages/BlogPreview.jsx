// src/pages/BlogPreview.jsx
import { memo } from "react";
import BlogCard from "../components/BlogCard"; // کارت وبلاگ
import { motion as Motion } from "framer-motion";

const posts = [
  {
    image: "/images/blog1.jpg",
    title: "چطور UI مدرن بسازیم",
    excerpt: "راهنمایی برای طراحی رابط کاربری ساده، زیبا و کاربرپسند.",
    slug: "ui-modern",
  },
  {
    image: "/images/blog2.jpg",
    title: "بهینه‌سازی عملکرد React",
    excerpt: "ترفندهایی برای افزایش سرعت و کاهش مصرف منابع در پروژه‌های React.",
    slug: "react-performance",
  },
  {
    image: "/images/blog3.jpg",
    title: "اهمیت UX در نرخ تبدیل",
    excerpt: "چطور تجربه کاربری خوب می‌تواند فروش و تعامل را افزایش دهد.",
    slug: "ux-conversion",
  },
];

function BlogPreview() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Blur Circles پس‌زمینه */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-brand-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-brand-accent/10 blur-xl" />

      {/* توضیح مقدمه‌ای */}
      <Motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 mb-12 text-center max-w-3xl mx-auto"
      >
        در این بخش می‌توانید مقالات آموزشی و تخصصی ما را مطالعه کنید.
      </Motion.p>

      {/* لیست کارت‌های وبلاگ */}
      <div className="max-w-6xl mx-auto relative z-10 grid gap-8 md:grid-cols-3">
        {posts.map((post, i) => (
          <BlogCard
            key={i}
            image={post.image}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            delay={i * 0.2}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(BlogPreview);
