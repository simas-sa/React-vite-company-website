import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white py-28 px-6 text-center"
      aria-label="بخش معرفی اصلی"
    >
      {/* Blur Circles پررنگ‌تر */}
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-white/10 blur-2xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
        >
          آینده‌ی دیجیتال خود را همین امروز بسازید
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto"
        >
          طراحی مدرن، توسعه سریع و تجربه‌ای که اعتماد و تبدیل را افزایش می‌دهد.
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            همکاری با ما 
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors duration-300"
          >
            نمونه کارها
          </Link>
        </Motion.div>
      </div>
    </section>
  );
}
