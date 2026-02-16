import { memo } from "react";

const projects = [
  {
    image: "/images2/project1.webp",
    title: "پروژه وب شرکتی",
    description: "طراحی وب‌سایت مدرن برای یک شرکت بین‌المللی.",
    link: "/projects/project1"
  },
  {
    image: "/projects/project2.webp",
    title: "اپلیکیشن فروشگاهی",
    description: "اپلیکیشن موبایل برای خرید آنلاین با تجربه کاربری عالی.",
    link: "/projects/project2"
  },
  {
    image: "/projects/project3.webp",
    title: "داشبورد مدیریتی",
    description: "سیستم داشبورد برای مدیریت داده‌ها و گزارش‌ها.",
    link: "/projects/project3"
  },
];

const PortfolioCard = memo(function PortfolioCard({ image, title, description, link }) {
  return (
    <div
      className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
      role="article"
      aria-label={title}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="font-semibold text-lg text-brand-primary">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
      <a
        href={link}
        className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
      >
        مشاهده جزئیات
      </a>
    </div>
  );
});

function Portfolio() {
  return (
    <section className="relative px-6 py-16 max-w-6xl mx-auto overflow-hidden">
      {/* Blur Circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-brand-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-brand-accent/10 blur-xl" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, i) => (
          <PortfolioCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

export default memo(Portfolio);
