import { ExternalLink, Github, Youtube, FileText, Link2 } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  type: "paper" | "repo" | "youtube" | "blog";
  tags?: string[];
}

const iconMap = {
  paper: FileText,
  repo: Github,
  youtube: Youtube,
  blog: Link2,
};

const typeLabels = {
  paper: "Research Paper",
  repo: "Repository",
  youtube: "YouTube",
  blog: "Blog",
};

const ResourceCard = ({ title, description, url, type, tags = [] }: ResourceCardProps) => {
  const Icon = iconMap[type];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block card-hover rounded-xl p-5 bg-card border border-border"
    >
      <div className="flex items-start gap-4">
        <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
          <Icon size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-sans text-base font-medium text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
            <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="text-xs font-medium text-primary/80 bg-primary/5 px-2 py-1 rounded">
              {typeLabels[type]}
            </span>
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;
