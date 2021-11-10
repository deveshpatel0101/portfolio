import React from 'react';
import './About.css';
import profilePicture from './profile_picture_512x512.jpg';

class About extends React.Component {
  render() {
    return (
      <div className='About-Container'>
        <div className='About-Image'>
          <img src={profilePicture} alt='My Profile' />
        </div>
        <div className='About-Description'>
          Hello 👋, I am <b>Devesh</b>, an ambitious and passionately curious
          Software Developer. I am a Computer Science graduate student pursuing
          my Masters at Florida State University. I thrive to write code that
          make a difference. I have completed&nbsp;
          <a href='https://confirm.udacity.com/PPCKC6AG' target='_blank'>
            Front End Web Developer Nanodegree
          </a>
          &nbsp;from Udacity. I am a&nbsp;
          <a href='https://www.credential.net/297jnxqi' target='_blank'>
            Google certified Mobile Web Specialist(MWS)
          </a>
          . Apparantely, I am exploring the fields of Artificial Intelligence
          and Machine Learning. Apart from all these, I am implementing Data
          Structures and Algorithms which by the way has fascinated me and I am
          diving deeper into it. Take a look at my&nbsp;
          <a href='/static/resume/devesh_patel_resume.pdf' target='_blank'>
            RESUME
          </a>
          &nbsp;for deeper insights on my technical skills. I am always open to
          help and suggestions, so feel free to shoot me a message anytime.
        </div>
      </div>
    );
  }
}

export default About;
