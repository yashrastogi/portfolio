
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-background/70 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-container flex items-center justify-between">
        <a href="#home" className="text-xl font-display font-semibold">
          Yash<span className="text-primary">.Rastogi</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <ThemeSwitcher />
        </nav>
        
        <div className="md:hidden flex items-center">
          <ThemeSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="px-4 py-2 text-sm font-medium hover-underline"
    >
      {children}
    </a>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 ml-2 rounded-full hover:bg-secondary"
        aria-label="Menu"
      >
        <div className="w-5 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-0.5 w-full bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
        </div>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 glass bg-background/90 rounded-xl shadow-xl animate-fade-in z-50">
          <a href="#about" className="block px-4 py-2 text-sm hover:bg-secondary/50 rounded-md mx-2" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="block px-4 py-2 text-sm hover:bg-secondary/50 rounded-md mx-2" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#experience" className="block px-4 py-2 text-sm hover:bg-secondary/50 rounded-md mx-2" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#education" className="block px-4 py-2 text-sm hover:bg-secondary/50 rounded-md mx-2" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#projects" className="block px-4 py-2 text-sm hover:bg-secondary/50 rounded-md mx-2" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="block px-4 py-2 text-sm hover:bg-secondary/50 rounded-md mx-2" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  );
}
