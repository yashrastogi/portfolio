
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer({ footerLinks }: { footerLinks: Array<{ link: string; iconClass: string }> }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="max-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-display font-semibold mb-2">Yash Rastogi</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Software Developer & Cybersecurity Specialist
            </p>
          </div>
          
          <div className="flex space-x-4">
            {footerLinks.map((link, index) => (
              <SocialLink key={index} href={link.link} iconClass={link.iconClass} />
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Yash Rastogi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, iconClass }: { href: string; iconClass: string }) {
  const getIcon = () => {
    if (iconClass.includes("github")) return <Github size={18} />;
    if (iconClass.includes("linkedin")) return <Linkedin size={18} />;
    return <Mail size={18} />;
  };
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      aria-label={`Visit ${iconClass.replace('fa-', '')}`}
    >
      {getIcon()}
    </a>
  );
}
