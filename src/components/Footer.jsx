import { motion as Motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-slate-100 dark:bg-slate-800 py-8 transition-colors duration-300 overflow-hidden"
      aria-label="پاورقی سایت"
    >
      {/* Blur Circles سبک */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-brand-primary/10 blur-xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-brand-accent/10 blur-lg" />

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center text-slate-600 dark:text-slate-300 relative z-10"
      >
        <p className="text-sm">
          © {year} <span className="font-semibold text-brand-primary">NEXUS Corp</span>. همه حقوق محفوظ است.
        </p>
      </Motion.div>
    </footer>
  );
};

export default Footer;
