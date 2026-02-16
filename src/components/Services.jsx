// src/components/Services.jsx
export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "طراحی وب",
      description: "طراحی مدرن، ریسپانسیو و مقیاس‌پذیر."
    },
    {
      icon: "📱",
      title: "اپلیکیشن موبایل",
      description: "اندروید و iOS با تجربه‌ی روان."
    },
    {
      icon: "🔒",
      title: "امنیت سایبری",
      description: "حفاظت از داده‌ها و زیرساخت‌ها."
    }
  ];

  return (
    <section className="py-16 px-6 bg-brand-neutral min-h-[80vh]">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
          خدمات ما
        </h1>
        <p className="text-gray-600 mb-10">
          راهکارهای مدرن با تمرکز بر نتیجه
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition transform duration-300"
            >
              <div className="text-4xl mb-4 text-brand-primary">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
