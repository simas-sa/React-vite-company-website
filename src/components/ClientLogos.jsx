import { motion as Motion } from "framer-motion";

export default function ClientLogos() {
  const logos = [
    { label: "Sahar", placeholder: "SA", src: null },
    { label: "Nava", placeholder: "NV", src: "/images/nava-logo.png" },
    { label: "Rasa", placeholder: "RS", src: null },
    { label: "Setareh", placeholder: "ST", src: "/images/setareh-logo.png" }
  ];

  return (
    <section className="relative text-center py-16 overflow-hidden bg-white">
      {/* Blur Circles سبک‌تر و هماهنگ */}
      <div
        className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-brand-primary/10 blur-xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-brand-accent/10 blur-lg"
        aria-hidden="true"
      />

      <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10 relative z-10">
        {logos.map((l, i) => (
          <Motion.li
            key={i}
            aria-label={l.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="h-14 w-28 rounded-md border border-gray-200 grid place-items-center bg-gray-50 text-gray-700 font-medium shadow-sm hover:shadow-md transition-transform duration-300"
          >
            {l.src ? (
              <img
                src={l.src}
                alt={l.label}
                className="max-h-10 max-w-full object-contain"
                loading="lazy"
              />
            ) : (
              l.placeholder
            )}
          </Motion.li>
        ))}
      </ul>
    </section>
  );
}
