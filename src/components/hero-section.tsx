import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroProps {
  name: string;
  pictureUrl: string;
  field: string;
  resumeUrl: string;
}

export function HeroSection({ name, pictureUrl, field, resumeUrl }: HeroProps) {
  const isMobile = useIsMobile();

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left order-2 md:order-1 animate-fade-in">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
            Hi, I'm <span className="text-primary">{name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-md mx-auto md:mx-0">
            {field}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">Get in touch</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="relative order-1 md:order-2 flex justify-center md:justify-end animate-fade-in animate-delay-300">
          <div className="relative">
            <div className="absolute inset-0 -z-10 flex justify-center items-center">
              <div className="w-64 h-64 md:w-84 md:h-84 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl" />
            </div>
            <div className="relative w-60 h-60 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-background shadow-xl">
              <img
                src={pictureUrl}
                alt={name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {!isMobile && (
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDownIcon className="h-5 w-5 animate-bounce" />
        </a>
      )}
    </section>
  );
}
