import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/BlogCard";
import { getBlogsByCategory, Blog } from "@/data/blogs";

const categoryInfo: Record<string, { title: string; description: string }> = {
  audio: {
    title: "Audio AI",
    description: "Explore text-to-speech, music generation, voice cloning, and audio processing technologies.",
  },
  image: {
    title: "Image AI",
    description: "Discover diffusion models, GANs, ControlNet, and the latest in image generation and editing.",
  },
  llms: {
    title: "Large Language Models",
    description: "Deep dives into GPT, Claude, fine-tuning techniques, and the evolving landscape of LLMs.",
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const info = categoryInfo[category || ""] || { title: "Category", description: "" };
  const categoryBlogs = getBlogsByCategory(category as Blog["category"]) || [];

  return (
    <Layout>
      <section className="gradient-hero py-16 md:py-20">
        <div className="container">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="category-badge mb-4">{category?.toUpperCase()}</span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {info.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              {info.description}
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        {categoryBlogs.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryBlogs.map((blog, index) => (
              <div 
                key={blog.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard
                  title={blog.title}
                  excerpt={blog.excerpt}
                  category={blog.category.toUpperCase()}
                  image={blog.image}
                  date={blog.date}
                  slug={blog.slug}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No posts in this category yet.</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default CategoryPage;
