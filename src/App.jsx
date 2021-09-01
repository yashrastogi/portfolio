import Header from './components/Header';
import Footer from './components/Footer';
import Cover from './sections/Lead';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import jQuerySetup from './tools/jQuerySetup';
import React, { useEffect } from 'react';

function App() {
  const sections = [About, Experience, Education, Projects, Skills, Contact];
  useEffect(jQuerySetup);

  return (
    <React.Fragment>
      <Header sections={sections.map((i) => i.displayName)} />
      <Cover />

      {sections.map((SectionComponent) => (
        <SectionComponent key={SectionComponent.displayName} />
      ))}

      <Footer />
    </React.Fragment>
  );
}

export default App;
