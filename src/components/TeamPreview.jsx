import { motion as Motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "علی محمدی",
    role: "مدیر فنی",
    image: "/images2/male-executive-with-glasses.jpg",
    bio: "متخصص در زمینه توسعه فرانت‌اند با ۸ سال تجربه",
  },
  {
    name: "علی محمدی۲",
    role: "طراح UI/UX",
    image: "/images2/female-designer.jpg",
    bio: "طراح خلاق با تمرکز بر تجربه کاربری بی‌نظیر",
  },
  {
    name: "مهدی کاظمی",
    role: "توسعه‌دهنده بک‌اند",
    image: "/images2/backend-developer.jpg",
    bio: "متخصص در توسعه API و سیستم‌های scalable",
  },
];

export default function TeamPreview() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden">
      {/* فقط دو دایره مثل سایر سکشن‌ها */}
      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-brand-primary/20 blur-3xl" />
      <div className="absolute -right-16 -bottom-16 w-60 h-60 rounded-full bg-brand-accent/20 blur-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 p-6"
            >
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover rounded-md shadow-sm"
                />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-brand-primary text-white p-2 rounded hover:bg-brand-primaryDark transition-colors">
                    <FaLinkedin />
                  </button>
                  <button className="bg-brand-primary text-white p-2 rounded hover:bg-brand-primaryDark transition-colors">
                    <FaTwitter />
                  </button>
                  <button className="bg-brand-primary text-white p-2 rounded hover:bg-brand-primaryDark transition-colors">
                    <FaInstagram />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <span className="block text-sm font-medium text-brand-accent mb-2">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
