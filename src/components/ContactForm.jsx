import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ text: "لطفاً همه فیلدها را پر کنید.", type: "error" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ text: "ایمیل معتبر وارد کنید.", type: "error" });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ text: "", type: "" });

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAIL_USER_ID
      )
      .then(() => {
        setStatus({ text: "پیام با موفقیت ارسال شد!", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({ text: "ارسال پیام با خطا مواجه شد.", type: "error" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>

      <label htmlFor="name">نام</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="نام شما"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">ایمیل</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="ایمیل شما"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">پیام</label>
      <textarea
        id="message"
        name="message"
        placeholder="پیام شما"
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* دکمه با انیمیشن */}
      <Motion.button
        type="submit"
        disabled={loading}
        whileTap={{ scale: 0.95 }}
        animate={
          loading
            ? { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 0.6 } }
            : {}
        }
      >
        {loading ? "در حال ارسال..." : "ارسال پیام"}
      </Motion.button>

      {/* پیام وضعیت با آیکون */}
      <AnimatePresence>
        {status.text && (
          <Motion.div
            className={`form-status ${status.type}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {status.type === "success" && (
              <CheckCircleIcon className="h-5 w-5 inline-block mr-1 text-green-600" />
            )}
            {status.type === "error" && (
              <XCircleIcon className="h-5 w-5 inline-block mr-1 text-red-600" />
            )}
            {status.text}
          </Motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
