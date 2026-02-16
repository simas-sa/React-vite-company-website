import { Link } from "react-router-dom";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { motion as Motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-neutral via-white to-brand-accent/10 py-20 px-6 md:px-12 overflow-hidden">
      {/* افکت پس‌زمینه نرم */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-brand-accent/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* تصویر تیم */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <img
            src="/images2/business-people-with-arms-crossed-one-with-hands-pockets.jpg"
            alt="تیم ما"
            className="w-full h-auto object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </Motion.div>

        {/* متن معرفی + CTA */}
        <Motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg md:w-1/2"
        >
          <p className="text-brand-text text-lg leading-relaxed mb-6 dark:text-gray-300">
            من به شرکت‌ها کمک می‌کنم تا با طراحی مدرن و کاربرپسند، حضور دیجیتال قدرتمندی داشته باشند.
          </p>
          <p className="text-brand-text leading-relaxed mb-8 dark:text-gray-300">
            هدف ما ارائه راهکارهای نوآورانه و با کیفیت برای رشد کسب‌وکار شماست.
          </p>

          {/* CTA دکمه با افکت pulse */}
          <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-primary hover:bg-brand-primaryDark text-white rounded-full shadow-lg transition duration-300"
            >
              <InformationCircleIcon className="w-5 h-5" />
              بیشتر بدانید
            </Link>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
