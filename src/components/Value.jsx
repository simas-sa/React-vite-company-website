import { BoltIcon, ShieldCheckIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import React, { memo } from "react";
import { motion as Motion } from "framer-motion";

const VALUES = [
  { icon: BoltIcon, title: "سرعت اجرا و تحویل", desc: "تحویل به‌موقع با کد تمیز و آماده‌ی توسعه، بدون فدا کردن کیفیت." },
  { icon: ShieldCheckIcon, title: "اعتماد و پایداری", desc: "استانداردهای کدنویسی، تست و امنیت؛ سایت پایدار برای رشد واقعی." },
  { icon: ChartBarIcon, title: "تمرکز بر تبدیل", desc: "طراحی برای اثر: CTAهای واضح، پیام روشن و ساختار قابل‌فهم." }
];

const ValueCard = memo(function ValueCard({ icon, title, desc, delay = 0 }) {
  const IconComp = icon;
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      role="article"
      aria-label={title}
    >
      <IconComp className="h-7 w-7 text-brand-primary" aria-hidden="true" />
      <h3 className="mt-4 font-semibold text-lg text-brand-text">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
    </Motion.div>
  );
});

function Value() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {VALUES.map((item, i) => (
        <ValueCard
          key={i}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          delay={i * 0.2}
        />
      ))}
    </div>
  );
}

export default memo(Value);
