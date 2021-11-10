import React from 'react';
import './Education.css';

class Education extends React.Component {
  render() {
    return (
      <div className='Education-Container'>
        <div className='Default-Header'>
          <p>Education</p>
        </div>
        <div className='Education-List'>
          <div className='Education-Item'>
            <div className='Education-Item-Header'>
              <div className='Education-Item-Degree'>
                <h3>Master of Science in Computer Science</h3>
              </div>
              <div className='Education-Item-University'>
                Florida State University | FL, USA
              </div>
              <div className='Education-Item-Location-Time'>2021 - 2022</div>
              <div className='Education-Item-Grade'>N/A</div>
            </div>
            <div className='Education-Item-Description'>
              <h3>Courses Taken:</h3>
              <p>
                Data Mining | Advanced Database Systems | Artificial
                Intelligence
              </p>
            </div>
          </div>
          <div className='Education-Item'>
            <div className='Education-Item-Header'>
              <div className='Education-Item-Degree'>
                <h3>Bachelor Of Engineering in Computer Engineering</h3>
              </div>
              <div className='Education-Item-University'>
                Gujarat Technological University | Gujarat, India
              </div>
              <div className='Education-Item-Location-Time'>2016 - 2020</div>
              <div className='Education-Item-Grade'>CGPA: 8.76/10</div>
            </div>
            <div className='Education-Item-Description'>
              <h3>Courses Taken:</h3>
              <p>
                Data Structure | Database Management Systems | Operating System
                | Object Oriented Programming With C++ | Computer Organization |
                Computer Networks | Analysis and Design of Algorithms | Object
                Oriented Programming using JAVA | System Programming | Software
                Engineering | Advanced Java | Web Technology | .Net Technology |
                Compiler Design | Information and Network Security | Mobile
                Computing and Wireless Communication | Data Mining and Business
                Intelligence | Python Programming | Artificial Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
