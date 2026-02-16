import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogCard = ({ image, title, excerpt, slug, category, date, delay = 0 }) => {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      aria-label={title}
    >
      {/* تصویر مقاله */}
      <img
        src={image}
        alt={`تصویر مقاله: ${title}`}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      {/* محتوای کارت */}
      <div className="p-6">
        {/* دسته‌بندی و تاریخ */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          {category && (
            <span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md mr-2">
              {category}
            </span>
          )}
          {date && <span>{date}</span>}
        </div>

        {/* عنوان */}
        <h3 className="text-xl font-bold text-indigo-700 mb-2">{title}</h3>

        {/* خلاصه */}
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {excerpt || "در حال بارگذاری..."}
        </p>

        {/* دکمه ادامه مطلب */}
        <Link
          to={`/blog/${slug}`}
          className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          ادامه مطلب
        </Link>
      </div>
    </Motion.article>
  );
};

export default BlogCard;
