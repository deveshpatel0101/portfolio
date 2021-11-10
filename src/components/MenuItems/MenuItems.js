import React from 'react';
import './MenuItems.css';

import { Typography, Divider, Button } from '@material-ui/core';
import {
  Person as AboutIcon,
  Web as ProjectsIcon,
  Equalizer as SkillsIcon,
  StarBorder as CertificatesIcon,
  School as EducationIcon,
  Email as ContactIcon,
  Description as ResumeIcon,
} from '@material-ui/icons';
import Scrollspy from 'react-scrollspy';

class MenuItems extends React.Component {
  render() {
    const { handleDrawerToggle } = this.props;
    return (
      <div className='MenuItems-Container'>
        <div className='MenuItems-Headline'>
          <Typography variant='h4' align='center'>
            Devesh
          </Typography>
          <Typography variant='h4' align='center'>
            Patel
          </Typography>
          <Typography variant='body2' align='center'>
            Seeking Summer '22 SE Internships
          </Typography>
        </div>
        <Divider />
        <Scrollspy
          items={[
            'About',
            'Projects',
            'Skills',
            'Certificates',
            'Education',
            'Contact',
          ]}
          className='Scroll-Spy-Container'
          currentClassName='ListItem-Active'
          offset={-5}
        >
          <li className='MenuItem About'>
            <a href='#About' onClick={handleDrawerToggle}>
              <Button>
                <AboutIcon />
                About
              </Button>
            </a>
          </li>
          <li className='MenuItem Projects'>
            <a href='#Projects' onClick={handleDrawerToggle}>
              <Button>
                <ProjectsIcon />
                Projects
              </Button>
            </a>
          </li>
          <li className='MenuItem Skills'>
            <a href='#Skills' onClick={handleDrawerToggle}>
              <Button>
                <SkillsIcon />
                Skills
              </Button>
            </a>
          </li>
          <li className='MenuItem Certificates'>
            <a href='#Certificates' onClick={handleDrawerToggle}>
              <Button>
                <CertificatesIcon />
                Certificates
              </Button>
            </a>
          </li>
          <li className='MenuItem Education'>
            <a href='#Education' onClick={handleDrawerToggle}>
              <Button>
                <EducationIcon />
                Education
              </Button>
            </a>
          </li>
          <li className='MenuItem Contact'>
            <a href='#Contact' onClick={handleDrawerToggle}>
              <Button>
                <ContactIcon />
                Contact
              </Button>
            </a>
          </li>
          <li className='MenuItem Resume'>
            <a
              href='/static/resume/devesh_patel_resume.pdf'
              target='_blank'
              onClick={handleDrawerToggle}
            >
              <Button>
                <ResumeIcon />
                Resume
              </Button>
            </a>
          </li>
        </Scrollspy>
      </div>
    );
  }
}

export default MenuItems;
