
interface SkillCategory {
  [key: string]: string[];
}

export function SkillsSection({ skills }: { skills: SkillCategory }) {
  const categories = Object.keys(skills);
  
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">What I bring to the table</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div 
            key={category}
            className="glass p-6 md:p-8 opacity-0 animate-fade-in" 
            style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'forwards' }}
          >
            <h3 className="text-xl font-display font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills[category].map((skill) => (
                <span key={skill} className="skill-chip animate-scale-in" style={{ animationDelay: '50ms', animationFillMode: 'forwards' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
