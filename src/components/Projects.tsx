import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A comprehensive data visualization platform with real-time analytics and interactive charts.",
    image: project1,
    tags: ["React", "TypeScript", "D3.js"],
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration and inventory management.",
    image: project2,
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Social Media App",
    description: "Modern social networking application with real-time messaging and content sharing.",
    image: project3,
    tags: ["React Native", "Firebase", "Node.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card 
              key={project.title} 
              className="overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
