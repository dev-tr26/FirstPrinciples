import { Link } from "react-router-dom";
import { Github, Twitter, Rss } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-xl text-foreground">
              FirstPrinciples
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              A curated collection of the best AI resources, research papers, tools, 
              and educational content for developers and researchers. 

              - By Rudra Trangadia.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/audio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Audio AI</Link></li>
              <li><Link to="/image" className="text-sm text-muted-foreground hover:text-primary transition-colors">Image AI</Link></li>
              <li><Link to="/llms" className="text-sm text-muted-foreground hover:text-primary transition-colors">LLMs</Link></li>
              <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Rss size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} FirstPrinciples. By- Rudra Trangadia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
