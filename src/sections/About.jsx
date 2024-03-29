const About = (props) => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2 className="heading">About Me</h2>
        </div>
        <div className="col-md-8">
          <p>{props.data.aboutString}</p>
        </div>
      </div>
    </div>
  </div>
);

About.displayName = 'About';

export default About;
