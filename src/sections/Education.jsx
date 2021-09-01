import { educationData } from "../PortfolioData";

const Education = () => (
  <div id="education">
    <h2 className="heading">Education</h2>
    {educationData.map((entry) => {
      return (
        <div className="education-block">
          <h3>{entry.name}</h3>
          <span className="education-date">{entry.date}</span>
          <h4>{entry.subtitle}</h4>
          <p>{entry.score}</p>
        </div>
      );
    })}
  </div>
);

Education.displayName = "Education";

export default Education;
