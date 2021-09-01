import { experienceData } from '../PortfolioData';

const Experience = () => (
  <div id="experience" className="background-alt">
    <h2 className="heading">Experience</h2>
    <div id="experience-timeline">
      {experienceData.map((inst) => {
        return (
          <div data-date={inst.date} key={inst.company + inst.date}>
            <h3>{inst.company}</h3>
            <h4>{inst.subtitle}</h4>
            <p style={{ whiteSpace: 'pre-wrap' }}>{inst.description}</p>
          </div>
        );
      })}
      {console.log(experienceData[0].description)}
    </div>
  </div>
);

Experience.displayName = 'Experience';

export default Experience;
