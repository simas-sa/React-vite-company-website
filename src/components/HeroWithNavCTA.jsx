import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* تصویر پس‌زمینه */}
      <div className="absolute inset-0">
        <img
          src="/images2/hero-bg.jpg" // مسیر تصویر بک‌گراند
          alt="پس‌زمینه Hero"
          className="w-full h-full object-cover"
        />
        {/* Overlay برای خوانایی متن */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* نوبار */}
      <header
        className={`fixed top-0 w-full z-50 transition-all ${
          isScrolled ? "backdrop-blur-md bg-white/80 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* لوگو */}
          <div
            className={`text-2xl font-bold text-blue-600 transition-transform duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          >
            <Link to="/">
              NEXUS <span className="text-gray-900">CORP</span>
            </Link>
          </div>

          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex gap-x-10">
            {[
              { path: "/", label: "خانه" },
              { path: "/about", label: "درباره ما" },
              { path: "/services", label: "خدمات" },
              { path: "/contact", label: "تماس" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative group ${
                  location.pathname === item.path
                    ? "text-blue-400 font-semibold"
                    : "text-white hover:text-blue-400"
                } transition-colors`}
              >
                {item.label}
                <span className="absolute right-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* دکمه موبایل */}
          <button
            className="md:hidden flex flex-col justify-center items-center space-y-1 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* منوی موبایل */}
        <div
          className={`md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden transform transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-5 scale-95"
          }`}
        >
          <nav className="flex flex-col space-y-4 py-6 px-6">
            {[
              { path: "/", label: "خانه" },
              { path: "/about", label: "درباره ما" },
              { path: "/services", label: "خدمات" },
              { path: "/contact", label: "تماس" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group text-gray-900 hover:text-blue-500 transition-colors"
              >
                {item.label}
                <span className="absolute right-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          خوش آمدید به <span className="text-blue-400">NEXUS CORP</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          ما راه‌حل‌های مدرن برای طراحی و توسعه وب ارائه می‌دهیم.
        </p>
        <Link
          to="/services"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          مشاهده خدمات
        </Link>
      </div>
    </section>
  );
}


// import { Link } from "react-router-dom";
// import { motion as Motion } from "framer-motion";
// import { PhoneIcon } from "@heroicons/react/24/outline";

// export default function HeroWithNavCTA(){
//   return (
//     <section
//       className="relative min-h-screen flex flex-col text-white"
//       aria-label="صفحه اصلی با نوبار و دعوت به همکاری با بک‌گراند عکس"
//     >
//       {/* Background image + overlay */}
//       <img
//         src="/images/hero-dev-office.jpg"
//         alt="فضای کاری مدرن تکنولوژی"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Decorative blur circles on top of photo */}
//       <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
//       <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-white/10 blur-2xl" />

//       {/* Navbar */}
//       <nav className="relative z-10 flex justify-between items-center px-6 py-4">
//         <div className="text-xl font-bold">لوگو</div>
//         <ul className="flex gap-6 font-medium">
//           <li><Link to="/services" className="hover:text-indigo-200">خدمات</Link></li>
//           <li><Link to="/portfolio" className="hover:text-indigo-200">نمونه کارها</Link></li>
//           <li><Link to="/contact" className="hover:text-indigo-200">تماس</Link></li>
//         </ul>
//       </nav>

//       {/* Hero + CTA */}
//       <div className="flex-1 flex flex-col justify-center items-center text-center px-6 relative z-10">
//         <Motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
//         >
//           آینده‌ی دیجیتال خود را همین امروز بسازید
//         </Motion.h1>

//         <Motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
//         >
//           طراحی مدرن، توسعه سریع و تجربه‌ای که اعتماد و تبدیل را افزایش می‌دهد.
//         </Motion.p>

//         <Motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-10 flex flex-wrap justify-center gap-4"
//         >
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors duration-300 shadow-md hover:shadow-lg"
//             aria-label="تماس با ما"
//           >
//             <PhoneIcon className="h-5 w-5" aria-hidden="true" />
//             تماس بگیر
//           </Link>
//           <Link
//             to="/coll"
//             className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors duration-300"
//             aria-label="فرم همکاری"
//           >
//             فرم همکاری
//           </Link>
//         </Motion.div>
//       </div>
//     </section>
//   );
// }



