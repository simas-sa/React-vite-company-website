import { useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Collaboration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative bg-white py-16 px-6 md:px-12 overflow-hidden">
      {/* Blur Circles */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-brand-primary/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-brand-accent/10 blur-xl" />

      <div className="max-w-2xl mx-auto relative z-10">
        <Motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-white rounded-xl border border-gray-200 shadow-md p-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">نام و نام خانوادگی</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">ایمیل</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">نوع درخواست</label>
            <select
              name="type"
              required
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
            >
              <option value="">انتخاب کنید</option>
              <option value="hire">استخدام فرانت‌اند دولوپر</option>
              <option value="project">سفارش طراحی سایت</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">توضیحات</label>
            <textarea
              name="message"
              rows="4"
              required
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary"
              placeholder="مثلاً نوع سایت، زمان تحویل، یا مهارت‌هایی که نیاز دارید..."
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">رزومه یا نمونه کار (اختیاری)</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-brand-primary/10 file:text-brand-primary hover:file:bg-brand-primary/20"
            />
          </div>
          <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-primaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
            >
              ارسال درخواست
            </button>
          </Motion.div>
        </Motion.form>
      </div>
    </section>
  );
}
