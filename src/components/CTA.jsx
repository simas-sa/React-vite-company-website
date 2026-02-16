import { motion as Motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 p-10 md:p-14 text-white text-center"
      aria-label="بخش دعوت به همکاری"
    >
      {/* Blur Circles پررنگ‌تر */}
      <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-white/10 blur-2xl" />

      <Motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <Motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold drop-shadow-lg"
        >
          شروع همکاری — سریع و دقیق
        </Motion.h3>

        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-lg md:text-xl text-indigo-100"
        >
          یک جلسه‌ی کوتاه تنظیم کنیم؛ نیازها را روشن، مسیر را مشخص و تحویل را برنامه‌ریزی می‌کنیم.
        </Motion.p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            aria-label="تماس با ما"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            تماس بگیر
          </Link>
          <Link
            to="/coll"
            aria-label="فرم همکاری"
            className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors duration-300"
          >
            فرم همکاری
          </Link>
        </div>
      </Motion.div>
    </section>
  );
}
