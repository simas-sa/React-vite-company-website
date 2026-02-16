import { motion as Motion } from "framer-motion";

const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className="service-card bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
      role="article"
      aria-label={title}
    >
      <div className="icon text-brand-primary text-4xl mb-4">{icon}</div>
      <h4 className="text-lg font-bold text-brand-text mb-2">{title}</h4>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </Motion.div>
  );
};

export default ServiceCard;
