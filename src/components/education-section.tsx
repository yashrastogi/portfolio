import { useState } from "react";
import { GraduationCapIcon, NewspaperIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EducationItem {
  name: string;
  date: string;
  subtitle: string;
  score: string;
}

interface CertificationItem {
  name: string;
  date: string;
  imageUrl?: string;
  description: string;
  issuer: string;
}

interface Props {
  educations: EducationItem[];
  certifications: CertificationItem[];
}

export function EducationSection({ educations, certifications }: Props) {
  const [activeTab, setActiveTab] = useState<"education" | "certifications">("education");

  return (
    <section id="education" className="section-container">
      <div className="text-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <h2 className="section-title">{activeTab === "education" ? "Education" : "Certifications"}</h2>
        <p className="section-subtitle">
          {activeTab === "education" ? "My academic background" : "My professional certifications"}
        </p>
      </div>
      
      <div className="flex justify-center space-x-4 mb-6">
        <Button
          variant={activeTab === "education" ? "default" : "outline"}
          onClick={() => setActiveTab("education")}
        >
          Education
        </Button>
        <Button
          variant={activeTab === "certifications" ? "default" : "outline"}
          onClick={() => setActiveTab("certifications")}
        >
          Certifications
        </Button>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8">
        {activeTab === "education" && educations.map((edu, index) => (
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

        {activeTab === "certifications" && certifications.map((cert, index) => (
          <div
            key={index}
            className="glass p-6 md:p-8 flex flex-col md:flex-row gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
          >
            <div className="flex-shrink-0">
              {cert.imageUrl ? (
                <img src={cert.imageUrl} alt={cert.name} className="h-14 w-14 rounded-full object-cover filter grayscale" />
              ) : (
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <NewspaperIcon className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-xl font-display font-semibold">{cert.name}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-2">{cert.date}</p>
              <p className="font-medium">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
