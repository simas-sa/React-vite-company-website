import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "چطور می‌توانم با تیم شما همکاری کنم؟",
    answer: "کافیست از طریق صفحه تماس با ما فرم را پر کنید یا ایمیل ارسال کنید. تیم ما سریعاً با شما ارتباط می‌گیرد.",
  },
  {
    question: "آیا خدمات شما شامل پشتیبانی هم می‌شود؟",
    answer: "بله، ما پس از تحویل پروژه پشتیبانی فنی و به‌روزرسانی‌های لازم را ارائه می‌دهیم.",
  },
  {
    question: "هزینه پروژه‌ها چگونه محاسبه می‌شود؟",
    answer: "هزینه بر اساس نوع پروژه، پیچیدگی و زمان مورد نیاز تعیین می‌شود. پس از جلسه اولیه، یک برآورد دقیق ارائه می‌کنیم.",
  },
  {
    question: "آیا طراحی سایت شما ریسپانسیو است؟",
    answer: "بله، تمام پروژه‌های ما کاملاً ریسپانسیو هستند و روی موبایل، تبلت و دسکتاپ به‌خوبی نمایش داده می‌شوند.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
        سؤالات متداول
      </h2> */}

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              <ChevronDownIcon
                className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <Motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-4 text-gray-600 text-sm leading-relaxed"
              >
                {faq.answer}
              </Motion.div>
            )}
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
