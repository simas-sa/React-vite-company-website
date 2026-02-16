import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
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
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled ? "backdrop-blur-md bg-white/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full p-x-6 py-4">
        {/* لوگو سمت راست */}
        <div
          className={`text-2xl font-bold text-blue-600 transition-transform duration-300 ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
        >
          <Link to="/">
            NEXUS <span className="text-gray-900">CORP</span>
          </Link>
        </div>

        {/* منوی دسکتاپ راست‌چین */}
        <nav className="hidden md:flex gap-x-8 flex-1 w-full mr-20">
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
                  ? "text-blue-600 font-semibold"
                  : "text-gray-900 hover:text-blue-600"
              } transition-colors`}
            >
              {item.label}
              {/* خط زیرین انیمیشنی */}
              <span className="absolute right-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* دکمه موبایل */}
        <button
          className="md:hidden ml-8 pl-8 flex flex-col justify-center items-center space-y-1 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* منوی موبایل راست‌چین با fade + opacity + slide */}
      <div
        className={`md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden transform transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-5 scale-95"
        }`}
      >
        <nav className="flex flex-col  space-y-4 py-6 pl-8">
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
              {/* خط زیرین انیمیشنی برای موبایل */}
              <span className="absolute right-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
