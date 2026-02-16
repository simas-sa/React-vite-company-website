import { motion as Motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  titleClassName = "",
  contentClassName = "",
  withBlur = true, // افکت Blur Circles اختیاری
}) {
  return (
    <section
      id={id}
      className={`relative px-6 py-16 md:py-20 max-w-6xl mx-auto overflow-hidden ${className}`}
    >
      {/* Blur Circles مشترک */}
      {withBlur && (
        <>
          <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-brand-primary/10 blur-2xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-brand-accent/10 blur-xl" />
        </>
      )}

      {title && (
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center relative z-10"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent ${titleClassName}`}
          >
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
        </Motion.div>
      )}

      <Motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative z-10 ${contentClassName}`}
      >
        {children}
      </Motion.div>
    </section>
  );
}
