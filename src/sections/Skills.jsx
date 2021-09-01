import { skillsData } from '../PortfolioData';

const Skills = () => (
  <div id="skills">
    <h2 className="heading">Tools and Known Languages</h2>
    <ul>
      {skillsData.map((inst) => {
        return <li key={inst}>{inst}</li>;
      })}
    </ul>
  </div>
);

Skills.displayName = 'Skills';

export default Skills;
