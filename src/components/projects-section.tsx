
import { useState } from "react";
import { ExternalLinkIcon, Github } from "lucide-react";

interface Project {
  image: string;
  name: string;
  description: string;
  link?: string;
  linkType: "project" | "source" | "none";
  technologies: string[];
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  // Get unique technologies for filters
  const allTechnologies = ["All"];
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      if (!allTechnologies.includes(tech)) {
        allTechnologies.push(tech);
      }
    });
  });
  
  // Filter projects based on selected technology
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-container">
        <div className="text-center mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A selection of my recent work</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`skill-chip hover:scale-105 ${
                activeFilter === tech ? "active-filter" : ""
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { image, name, description, link, linkType, technologies } = project;
  
  return (
    <div 
      className="card-glass overflow-hidden opacity-0 animate-fade-in group"
      style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'forwards' }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image || "https://placehold.co/600x400/e2e8f0/475569?text=Project+Image"} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="skill-chip text-xs">
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="skill-chip text-xs">+{technologies.length - 3}</span>
          )}
        </div>
        
        {linkType !== "none" && link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
          >
            {linkType === "project" ? (
              <>
                View Project <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                View Source <Github className="ml-1 h-4 w-4" />
              </>
            )}
          </a>
        )}
      </div>
    </div>
  );
}
