// src/pages/Home.jsx
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import TeamPreview from "../components/TeamPreview";
import ValueSection from "../components/Value";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTA";
import FAQ from "../components/FAQ";
import ClientLogos from "../components/ClientLogos"
import Section from "../components/Section";
import { lazy, Suspense } from "react";
import HeroWithNavCTA from "../components/HeroWithNavCTA"
// Lazy load برای بخش وبلاگ
const BlogPreview = lazy(() => import("../components/BlogPreview"));

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section — پیشنهاد: داخل Hero یک CTA اولیه قرار بده */}
      <Hero />
      {/* <HeroWithNavCTA /> */}

      <Section
        id="value"
        title="چرا ما؟"
        subtitle="تمرکز بر کیفیت، اعتماد و نتیجه"
        className="text-blue-600"
      >
        <ValueSection />
      </Section>

      <Section
        id="about"
        title="درباره‌ی ما"
        subtitle="شفاف، مسئول و نتیجه‌محور"
        className="text-blue-600"
      >
        <About />
      </Section>

      <Section id="testimonials" title="نظر مشتریان" className="text-blue-600">
        <Testimonials />
      </Section>

      <Section id="logos" title="اعتماد برندها" className="text-blue-600">
        <ClientLogos />
      </Section>

      <Section
        id="services"
        title="خدمات ما"
        subtitle="راهکارهای مدرن با تمرکز بر نتیجه"
        className="text-blue-600"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon="💻"
            title="طراحی وب"
            description="طراحی مدرن، ریسپانسیو و مقیاس‌پذیر."
          />
          <ServiceCard
            icon="📱"
            title="اپلیکیشن موبایل"
            description="اندروید و iOS با تجربه‌ی روان."
          />
          <ServiceCard
            icon="🔒"
            title="امنیت سایبری"
            description="حفاظت از داده‌ها و زیرساخت‌ها."
          />
        </div>
      </Section>

      <Section id="portfolio" title="نمونه کارها" className="text-blue-600">
        <Portfolio />
      </Section>

      <Section id="team" title="تیم و فرهنگ کاری" className="text-blue-600">
        <TeamPreview />
      </Section>

      <Section id="faq" title="سوالات متداول" className="text-blue-600">
        <FAQ />
      </Section>

      <Suspense fallback={<div>در حال بارگذاری...</div>}>
        <Section
          id="blog"
          title="مقالات و دیدگاه‌ها"
          subtitle="دانش را به اشتراک می‌گذاریم"
          className="text-blue-600"
        >
          <BlogPreview />
        </Section>
      </Suspense>

      <Section id="contact" title="ارتباط با ما" className="text-blue-600">
        <ContactForm />
      </Section>

      <Section id="cta" className="text-blue-600">
        <CTASection />
      </Section>
    </div>
  );
};

export default Home;
