import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  image?: string;
  date: string;
  slug: string;
  featured?: boolean;
}

const BlogCard = ({ title, excerpt, category, image, date, slug, featured = false }: BlogCardProps) => {
  if (featured) {
    return (
      <Link 
        to={slug}
        className="group block card-hover rounded-xl overflow-hidden bg-card border border-border"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {image && (
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="category-badge w-fit mb-4">{category}</span>
            <h2 className="font-serif text-2xl md:text-3xl text-card-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
              {excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-muted-foreground">{date}</span>
              <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={slug}
      className="group block card-hover rounded-xl overflow-hidden bg-card border border-border"
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        <span className="category-badge w-fit mb-3">{category}</span>
        <h3 className="font-serif text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
          {excerpt}
        </p>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
    </Link>
  );
};

export default BlogCard;
