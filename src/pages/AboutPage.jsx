import { motion as Motion } from "framer-motion";
import {
  UserIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  const features = [
    {
      icon: <UserIcon className="h-12 w-12 text-brand-primary mb-4 mx-auto" />,
      title: "تیم حرفه‌ای",
      desc: "اعضای تیم ما با تجربه و تخصص بالا آماده ارائه بهترین خدمات هستند.",
    },
    {
      icon: <LightBulbIcon className="h-12 w-12 text-brand-primary mb-4 mx-auto" />,
      title: "نوآوری",
      desc: "ما همیشه به دنبال راه‌حل‌های خلاقانه برای پروژه‌های مشتریان هستیم.",
    },
    {
      icon: <ShieldCheckIcon className="h-12 w-12 text-brand-primary mb-4 mx-auto" />,
      title: "اعتماد",
      desc: "شفافیت و کیفیت بالا باعث شده مشتریان ما همیشه به ما اعتماد کنند.",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      {/* Blur Circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-brand-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-brand-accent/10 blur-xl" />

      {/* متن توضیحی */}
      <Motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto text-lg"
      >
        ما یک تیم متخصص در طراحی و توسعه وب هستیم. مأموریت ما ایجاد تجربه‌های
        کاربری مدرن، سریع و قابل اعتماد برای مشتریان است. ارزش‌های ما بر پایه
        نوآوری، اعتماد و همکاری شکل گرفته‌اند.
      </Motion.p>

      {/* سه کارت ویژگی */}
      <div className="grid md:grid-cols-3 gap-10 relative z-10">
        {features.map((f, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center"
          >
            {f.icon}
            <h3 className="text-lg font-semibold mb-3 text-brand-text">{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </Motion.div>
        ))}
      </div>

      {/* CTA پایین سکشن */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 text-center relative z-10"
      >
        <Motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-accent text-white rounded-lg shadow-lg font-semibold transition"
        >
          شروع همکاری
        </Motion.a>
        <Motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          src="/images2/Web_5-02.jpg"
          alt="تصویر تیم"
          className="w-full max-w-4xl mx-auto h-auto object-cover rounded-xl shadow-xl border-4 border-white mt-12"
        />
      </Motion.div>
    </section>
  );
}
