
import { GraduationCapIcon } from "lucide-react";

interface EducationItem {
  name: string;
  date: string;
  subtitle: string;
  score: string;
}

export function EducationSection({ educations }: { educations: EducationItem[] }) {
  return (
    <section id="education" className="section-container">
      <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background</p>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="glass p-6 md:p-8 flex flex-col md:flex-row gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
          >
            <div className="flex-shrink-0">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCapIcon className="h-6 w-6 text-primary" />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-display font-semibold">{edu.name}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-2">{edu.date}</p>
              <p className="font-medium mb-2">{edu.subtitle}</p>
              {edu.score !== "N/A" && (
                <p className="text-sm text-primary">{edu.score}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
