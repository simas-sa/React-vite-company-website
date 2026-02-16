import { motion as Motion } from "framer-motion";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function ServicesP() {
  const services = [
    {
      icon: <CodeBracketIcon className="h-12 w-12 text-brand-primary mb-4 mx-auto" />,
      title: "توسعه وب",
      desc: "طراحی و پیاده‌سازی وب‌سایت‌های مدرن با React و تکنولوژی‌های روز.",
    },
    {
      icon: <PaintBrushIcon className="h-12 w-12 text-brand-primary mb-4 mx-auto" />,
      title: "طراحی UI/UX",
      desc: "ایجاد رابط‌های کاربری زیبا و تجربه‌های کاربری روان و جذاب.",
    },
    {
      icon: <ChartBarIcon className="h-12 w-12 text-brand-primary mb-4 mx-auto" />,
      title: "بهینه‌سازی و آنالیز",
      desc: "تحلیل عملکرد سایت و بهینه‌سازی برای سرعت و سئو بهتر.",
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Blur Circles پس‌زمینه */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-brand-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-brand-accent/10 blur-xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* توضیح مقدمه‌ای */}
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 mb-16 text-center max-w-3xl mx-auto text-lg"
        >
          ما مجموعه‌ای از خدمات تخصصی در زمینه طراحی، توسعه و بهینه‌سازی وب ارائه می‌دهیم.
        </Motion.p>

        {/* کارت‌های خدمات */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center"
            >
              {s.icon}
              <h3 className="text-lg font-semibold mb-3 text-brand-text">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </Motion.div>
          ))}
        </div>

        {/* تصویر corporate illustration */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <img
            src="/images2/OIP.webp"
            alt="همکاری تیمی و پروژه‌های ما"
            className="rounded-xl shadow-xl max-w-4xl border-4 border-white"
          />
        </Motion.div>

        {/* CTA پایین سکشن */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-lg shadow-lg font-semibold transition"
          >
            شروع همکاری
          </Motion.a>
        </Motion.div>
      </div>
    </section>
  );
}
