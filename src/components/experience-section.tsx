
import { BriefcaseIcon } from "lucide-react";

interface ExperienceItem {
  company: string;
  date: string;
  subtitle: string;
  description: string;
}

export function ExperienceSection({ experiences }: { experiences: ExperienceItem[] }) {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-primary/20 -translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-16 last:mb-0 opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
            >
              <TimelineItem 
                position={index % 2 === 0 ? "left" : "right"} 
                company={exp.company}
                date={exp.date}
                subtitle={exp.subtitle}
                description={exp.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  position: "left" | "right";
  company: string;
  date: string;
  subtitle: string;
  description: string;
}

function TimelineItem({ position, company, date, subtitle, description }: TimelineItemProps) {
  const isLeft = position === "left";
  
  return (
    <div className={`flex flex-col md:flex-row items-start ${isLeft ? "" : "md:flex-row-reverse"}`}>
      {/* Content */}
      <div className="md:w-1/2 ml-16 md:ml-0 md:px-8">
        <div className="glass p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-display font-semibold">{company}</h3>
          <p className="text-sm font-medium text-muted-foreground mb-2">{date}</p>
          <p className="text-primary font-medium mb-4">{subtitle}</p>
          <div className="text-sm leading-relaxed whitespace-pre-line">
            {description}
          </div>
        </div>
      </div>
      
      {/* Timeline dot */}
      <div className="absolute top-0 left-6 md:left-1/2 -translate-x-1/2 bg-background p-1 rounded-full border-2 border-primary">
        <div className="bg-primary p-2 rounded-full">
          <BriefcaseIcon className="h-4 w-4 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
}
