import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getBlogBySlug } from "@/data/blogs";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = getBlogBySlug(`/blog/${slug}`);

  if (!blog) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Post not found</h1>
          <Link to="/" className="text-primary link-underline">
            Return home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container max-w-3xl py-12">
        <Link 
          to={`/${blog.category}`} 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to {blog.category.toUpperCase()}
        </Link>

        <header className="mb-10 animate-fade-in-up">
          <span className="category-badge mb-4">{blog.category.toUpperCase()}</span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            {blog.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-4">{blog.excerpt}</p>
          <span className="text-sm text-muted-foreground">{blog.date}</span>
        </header>

        {blog.image && (
          <div className="rounded-xl overflow-hidden mb-10 animate-fade-in">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        )}

        <div 
          className="prose prose-lg max-w-none animate-fade-in
            prose-headings:font-serif prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:marker:text-primary
            prose-img:rounded-xl"
        >
          {blog.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('- **')) {
              return <li key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace('- **', '<strong>').replace('**', '</strong>') }} />;
            }
            if (paragraph.startsWith('- ')) {
              return <li key={index}>{paragraph.replace('- ', '')}</li>;
            }
            if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) {
              return <li key={index}>{paragraph.replace(/^\d\. /, '')}</li>;
            }
            if (paragraph.startsWith('![')) {
              const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
              if (match) {
                return <img key={index} src={match[2]} alt={match[1]} className="my-8" />;
              }
            }
            if (paragraph.trim()) {
              return <p key={index}>{paragraph}</p>;
            }
            return null;
          })}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
