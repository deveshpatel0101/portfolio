import React from 'react';
import './Content.css';

import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Certificates from '../Certificates/Certificates';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';

class Content extends React.Component {
  render() {
    return (
      <div className='Content-Cotainer'>
        <div id='About'>
          <About />
        </div>
        <div id='Projects'>
          <Projects />
        </div>
        <div id='Skills'>
          <Skills />
        </div>
        <div id='Certificates'>
          <Certificates />
        </div>
        <div id='Education'>
          <Education />
        </div>
        <div id='Contact'>
          <Contact />
        </div>
      </div>
    );
  }
}

export default Content;
