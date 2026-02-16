import { motion as Motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Blur Circles پس‌زمینه */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-brand-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-brand-accent/10 blur-xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 rounded-full bg-brand-primary/5 blur-xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* فرم تماس */}
        <Motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6 border border-gray-200"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              نام
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:ring-brand-primary focus:border-brand-primary"
              placeholder="نام شما"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:ring-brand-primary focus:border-brand-primary"
              placeholder="ایمیل شما"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              پیام
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:ring-brand-primary focus:border-brand-primary"
              placeholder="پیام خود را بنویسید..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-brand-primary text-white rounded-lg shadow hover:bg-brand-accent transition"
          >
            ارسال پیام
          </button>
        </Motion.form>

        {/* اطلاعات تماس */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-center text-gray-600"
        >
          <p>ایمیل: info@example.com</p>
          <p>تلفن: +98 912 000 0000</p>
          <p>آدرس: تهران، خیابان مثال، پلاک ۱۲۳</p>
        </Motion.div>
      </div>
    </section>
  );
}
