import { useState, useRef, useEffect } from "react";
import { GraduationCapIcon, NewspaperIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [activeTab, educations, certifications]);

  return (
    <section id="education" className="section-container py-20 flex flex-col items-center">
      <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <h2 className="section-title">{activeTab === "education" ? "Education" : "Certifications"}</h2>
        <p className="section-subtitle">
          {activeTab === "education" ? "My academic background" : "My professional certifications"}
        </p>
      </div>
      
      <div className="relative flex justify-center mb-6 bg-gray-100 p-1 rounded-full w-64">
        <div
          className={cn(
            "absolute top-1 bottom-1 left-1 w-1/2 bg-primary rounded-full transition-all duration-300",
            activeTab === "certifications" && "translate-x-full"
          )}
        />
        <button
          className={cn("relative z-10 flex-1 text-center py-2 text-sm font-medium transition", activeTab === "education" ? "text-white" : "text-gray-500")}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={cn("relative z-10 flex-1 text-center py-2 text-sm font-medium transition", activeTab === "certifications" ? "text-white" : "text-gray-500")}
          onClick={() => setActiveTab("certifications")}
        >
          Certifications
        </button>
      </div>
      
      <div className="max-w-3xl w-full transition-all duration-500" style={{ height }}>
        <div ref={contentRef} className="space-y-8">
          {activeTab === "education" && educations.map((edu, index) => (
            <div
              key={index}
              className="glass p-6 md:p-8 flex flex-col md:flex-row gap-6 rounded-2xl shadow-lg border border-gray-200 opacity-0 animate-fade-in"
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
              className="glass p-6 md:p-8 flex flex-col md:flex-row gap-6 rounded-2xl shadow-lg border border-gray-200 opacity-0 animate-fade-in"
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
      </div>
    </section>
  );
}