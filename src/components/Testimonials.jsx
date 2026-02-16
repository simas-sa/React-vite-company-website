import { memo } from "react";
import { motion as Motion } from "framer-motion";

const testimonials = [
  {
    name: "شرکت سپهر",
    role: "مدیر فناوری",
    quote: "تحویل دقیق، طراحی حرفه‌ای و افزایش نرخ تبدیل—دقیقاً همان‌چیزی که می‌خواستیم."
  },
  {
    name: "آژانس آریا",
    role: "مدیر محصول",
    quote: "همکاری روان و ماژولار؛ تغییرات سریع و بدون ریسک روی کل پروژه اعمال شد."
  }
];

const TestimonialCard = memo(function TestimonialCard({ name, role, quote, delay }) {
  return (
    <Motion.figure
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform duration-300"
      role="article"
      aria-label={`${name} — ${role}`}
    >
      <blockquote className="text-gray-700 leading-relaxed text-base">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-brand-accent font-medium">
        {name} — {role}
      </figcaption>
    </Motion.figure>
  );
});

function Testimonials() {
  return (
    <section className="relative py-16 px-6 bg-white overflow-hidden">
      {/* Blur Circles سبک‌تر و هماهنگ */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-brand-primary/10 blur-xl" />
      <div className="pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-brand-accent/10 blur-lg" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* کارت‌ها */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              name={t.name}
              role={t.role}
              quote={t.quote}
              delay={i * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonials);
