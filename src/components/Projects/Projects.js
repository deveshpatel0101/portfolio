import React from 'react';
import './Projects.css';

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link,
} from '@material-ui/core';

import projects from '../../data/projects.json';

class Projects extends React.Component {
  render() {
    return (
      <div className='Projects-Container'>
        <div className='Default-Header'>
          <p>Projects</p>
        </div>
        <div className='Projects-List'>
          {projects.map((project, index) => (
            <Card key={index} className='Project-Item'>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                image={project.imageLocation}
                title={project.name}
              />
              <CardContent>
                <Typography gutterBottom variant='body1' component='h2'>
                  {project.name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Built with {project.stack}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={project.demoLink}>
                  <Button size='small' color='primary'>
                    Demo
                  </Button>
                </Link>
                <Link href={project.sourceLink}>
                  <Button size='small' color='primary'>
                    Source
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
