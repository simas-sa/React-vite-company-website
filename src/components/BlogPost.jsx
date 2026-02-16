import { useParams } from "react-router-dom";

const content = {
  "react-hooks": {
    title: "راهنمای کامل React Hooks",
    body: "در این مقاله با useState، useEffect و سایر هوک‌ها آشنا می‌شوید..."
  },
  "ui-ux-tips": {
    title: "نکات طلایی UI/UX",
    body: "برای طراحی تجربه کاربری بهتر باید به سادگی، وضوح و تعامل توجه کنید..."
  },
  "nextjs-performance": {
    title: "بهینه‌سازی عملکرد در Next.js",
    body: "با استفاده از Image Optimization و Static Generation می‌توانید سرعت سایت را افزایش دهید..."
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = content[slug];

  if (!post) {
    return <p className="text-center py-20">مقاله یافت نشد.</p>;
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </article>
  );
}
