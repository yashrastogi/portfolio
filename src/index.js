import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Cover from './sections/Cover';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import jQuerySetup from './tools/jQuerySetup';

export default function App(props) {
  useEffect(jQuerySetup);

  const sections = [About, Experience, Education, Projects, Skills, Contact];

  return (
    <React.StrictMode>
      <Header sections={sections.map((i) => i.displayName)} />
      <Cover data={props.data} />

      {sections.map((Component) => (
        <Component data={props.data} key={Component.displayName} />
      ))}

      <Footer />
    </React.StrictMode>
  );
}

fetch(
  'https://raw.githubusercontent.com/yashrastogi/portfolio/master/public/PortfolioData.json'
)
  .then((r) => r.json())
  .then((data) => ReactDOM.render(<App data={data} />, document.getElementById('root')));
