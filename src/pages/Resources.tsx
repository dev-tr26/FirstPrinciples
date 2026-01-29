import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ResourceCard from "@/components/ResourceCard";
import { resources, getResourcesByType, Resource } from "@/data/resources";

const tabs: { key: Resource["type"] | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "paper", label: "Papers" },
  { key: "repo", label: "Repos" },
  { key: "youtube", label: "YouTube" },
  { key: "blog", label: "Blogs" },
];

const Resources = () => {
  const [activeTab, setActiveTab] = useState<Resource["type"] | "all">("all");
  
  const filteredResources = activeTab === "all" 
    ? resources 
    : getResourcesByType(activeTab);

  return (
    <Layout>
      <section className="gradient-hero py-16 md:py-20">
        <div className="container">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Resources
            </h1>
            <p className="text-muted-foreground text-lg">
              A curated collection of research papers, GitHub repositories, YouTube channels, 
              and blogs to accelerate your AI learning journey.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {filteredResources.map((resource, index) => (
            <div 
              key={resource.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
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

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No resources found.</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Resources;
