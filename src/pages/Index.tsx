
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";

interface PersonData {
  personName: string;
  personPictureUrl: string;
  personField: string;
  aboutString: string;
  resumeUrl: string;
  experienceData: Array<{
    company: string;
    date: string;
    subtitle: string;
    description: string;
  }>;
  educationData: Array<{
    name: string;
    date: string;
    subtitle: string;
    score: string;
  }>;
  skillsData: {
    [key: string]: string[];
  };
  projectsData: Array<{
    image: string;
    name: string;
    description: string;
    link?: string;
    linkType: "project" | "source" | "none";
    technologies: string[];
  }>;
  formspreeEndpoint: string;
  footerLinks: Array<{
    link: string;
    iconClass: string;
  }>;
}

const Index = () => {
  const [data, setData] = useState<PersonData | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(
          process.env.NODE_ENV === 'development'
            ? 'PortfolioData.json'
            : 'PortfolioData.json'
            // : process.env.REACT_APP_PRODUCTION_JSON
        )
          .then((r) => r.json())
          .then((data) => setData(data));
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) {
    return <Loading />;
  }
  
  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Failed to load data</div>;
  }

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Navbar />
        
        <HeroSection 
          name={data.personName}
          pictureUrl={data.personPictureUrl}
          field={data.personField}
          resumeUrl={data.resumeUrl}
        />
        
        <AboutSection aboutText={data.aboutString} />
        
        <SkillsSection skills={data.skillsData} />
        
        <ExperienceSection experiences={data.experienceData} />
        
        <EducationSection educations={data.educationData} />
        
        <ProjectsSection projects={data.projectsData} />
        
        <ContactSection formspreeEndpoint={data.formspreeEndpoint} />
        
        <Footer footerLinks={data.footerLinks} />
      </div>
    </ThemeProvider>
  );
};

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-4 p-6">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
        <div className="flex space-x-2 mt-4">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    </div>
  );
}

export default Index;
