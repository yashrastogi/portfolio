const Skills = (props) => (
  <div id="skills">
    <h2 className="heading">Tools and Known Languages</h2>
    <ul>
      {props.data.skillsData.map((inst) => {
        return <li key={inst}>{inst}</li>;
      })}
    </ul>
  </div>
);

Skills.displayName = 'Skills';

export default Skills;
