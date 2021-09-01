import { skillsData } from "../PortfolioData";

const Skills = () => (
  <div id="skills">
    <h2 className="heading">Tools and Known Languages</h2>
    <ul>
      {skillsData.map((inst) => {
        return <li>{inst}</li>;
      })}
    </ul>
  </div>
);

export default Skills;
