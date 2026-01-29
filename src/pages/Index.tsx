import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/BlogCard";
import ResourceCard from "@/components/ResourceCard";
import { blogs } from "@/data/blogs";
import { resources } from "@/data/resources";

const Index = () => {
  const featuredBlog = blogs[0];
  const recentBlogs = blogs.slice(1, 4);
  const featuredResources = resources.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
              Curated AI Resources for the Curious Mind
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore the best research papers, tools, tutorials, and insights 
              across Audio AI, Image Generation, and Large Language Models.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/resources" className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-accent text-primary-foreground font-medium text-sm transition-transform hover:scale-105">
                Explore Resources
                <ArrowRight size={16} />
              </Link>
              <Link to="/audio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors">
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">Featured</h2>
        </div>
        <BlogCard
          title={featuredBlog.title}
          excerpt={featuredBlog.excerpt}
          category={featuredBlog.category.toUpperCase()}
          image={featuredBlog.image}
          date={featuredBlog.date}
          slug={featuredBlog.slug}
          featured
        />
      </section>

      {/* Recent Posts Grid */}
      <section className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">Recent Posts</h2>
          <Link to="/llms" className="text-sm text-primary font-medium link-underline">
            View all
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBlogs.map((blog, index) => (
            <div key={blog.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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
      </section>

      {/* Categories */}
      <section className="container py-16">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">Explore by Category</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { name: "Audio AI", path: "/audio", description: "TTS, Music Gen, Voice Cloning" },
            { name: "Image AI", path: "/image", description: "Diffusion, GANs, ControlNet" },
            { name: "LLMs", path: "/llms", description: "GPT, Claude, Fine-tuning" },
          ].map((category, index) => (
            <Link
              key={category.path}
              to={category.path}
              className="group p-6 rounded-xl border border-border bg-card card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-serif text-xl text-card-foreground group-hover:text-primary transition-colors mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Resources */}
      <section className="container py-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">Top Resources</h2>
          <Link to="/resources" className="text-sm text-primary font-medium link-underline">
            View all
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {featuredResources.map((resource, index) => (
            <div key={resource.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ResourceCard
                title={resource.title}
                description={resource.description}
                url={resource.url}
                type={resource.type}
                tags={resource.tags}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
