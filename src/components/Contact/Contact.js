import React from 'react';
import './Contact.css';

import { TextField, Button } from '@material-ui/core';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  EmailOutlined as EmailIcon,
} from '@material-ui/icons';
import emailjs from 'emailjs-com';
import secret from '../../secret';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;
    const data = {
      name,
      email,
      message,
    };
    emailjs.init(secret.userId);
    await emailjs.send('service_eqdaer4', 'portfolio_template', data);
    this.setState({ showAlert: true });
  };
  render() {
    return (
      <div className='Contact-Container'>
        <div className='Default-Header'>
          <p>Contact</p>
        </div>
        <div className='Contact-Description'>
          <div
            className={
              this.state.showAlert ? 'Alert-Message' : 'Alert-Message-Hide'
            }
          >
            Your response has been recorded. I will get back to you soon, Thank you!
          </div>
          <form className='Contact-Form' onSubmit={this.handleSubmit}>
            <div className='Contact-Form-Name'>
              <TextField
                required
                label='Name'
                margin='dense'
                size='small'
                variant='outlined'
                fullWidth
                name='username'
              />
            </div>
            <div className='Contact-Form-Email'>
              <TextField
                type='email'
                name='email'
                required
                label='Email'
                margin='dense'
                size='small'
                variant='outlined'
                fullWidth
              />
            </div>
            <div className='Contact-Form-Message'>
              <TextField
                required
                label='Message'
                multiline
                name='message'
                rows={5}
                margin='dense'
                size='small'
                fullWidth
                variant='outlined'
              />
            </div>
            <div className='Contact-Submit-Form'>
              <Button
                variant='contained'
                type='submit'
                size='small'
                color='primary'
              >
                Submit
              </Button>
            </div>
          </form>
          <div className='Contact-Media'>
            <div className='Contact-Media-Github'>
              <a href='https://github.com/deveshpatel0101'>
                <GitHubIcon />
              </a>
            </div>
            <div className='Contact-Media-Linkedin'>
              <a href='https://www.linkedin.com/in/deveshpatel7643/'>
                <LinkedInIcon />
              </a>
            </div>
            <div className='Contact-Media-Email'>
              <a href='mailto:mehacker369@gmail.com'>
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
