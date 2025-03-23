
export function AboutSection({ aboutText }: { aboutText: string }) {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-container">
        <div className="text-center mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="max-w-4xl mx-auto glass p-8 md:p-10 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <p className="leading-relaxed text-lg">
            {aboutText}
          </p>
        </div>
      </div>
    </section>
  );
}
