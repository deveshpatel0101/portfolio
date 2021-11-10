import React from 'react';
import './Skills.css';

import { Card, Typography, Divider } from '@material-ui/core';

import skills from '../../data/skills.json';

class Skills extends React.Component {
  render() {
    return (
      <div className='Skills-Container'>
        <div className='Default-Header'>
          <p>Skills</p>
        </div>
        <div className='Skills-Description'>
          {skills.map((data, dataIndex) => (
            <Card className='Skills-Type' key={dataIndex}>
              <Typography variant='h4'>{data.type}</Typography>
              <Divider />
              <div className='Skills-Type-List'>
                {data.items.map((item, itemIndex) => (
                  <div className='Skills-Item' key={itemIndex}>
                    <div className='Skills-Item-Image'>
                      <img src={item.logoLocation} alt={item.name} />
                    </div>
                    <div className='Skills-Item-Name'>{item.name}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
