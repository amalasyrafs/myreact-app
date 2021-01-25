import React from 'react';
import {} from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-parent'>
      <div className='container'>
        <div id='contact' class='text-center'>
          <div className='row'>
            <div className='col-5 offset-1'>
              <h4 className='mt-2'>Chat with Me!</h4>
            </div>
            <div className='col-6'>
              <a
                href='mailto:amaluddinasyraf@gmail.com'
                class='btn btn-outline-primary btn-lg'
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' id='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 col-sm-2'>
              <h5>Navigations</h5>
              <Link to='/home' className=' nav-link'>
                Home
              </Link>
              <Link to='/game' className=' nav-link'>
                Tic-Tac
              </Link>
              <Link to='/weather' className=' nav-link'>
                Weather
              </Link>
              <Link to='/recipe' className=' nav-link'>
                Recipe
              </Link>
              <Link to='/home' className=' nav-link'>
                Covid-19 Form
              </Link>
            </div>
            <div className='col-6 col-sm-5 text-center'>
              <h5>About</h5>
              <p className='col-lg-8 offset-2'>
                Creating content for fun as part of my learning curve in HTML,
                CSS and Javascript with React
              </p>
            </div>
            <div className='col-12 col-sm-5 text-center'>
              <h5>Visit me on other social pages</h5>
              <a
                className='btn btn-social-icon btn-twitter'
                href='https://twitter.com/amalasyrafs'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span class='fa fa-twitter'></span>
              </a>

              <a
                className='btn btn-social-icon btn-instagram'
                href='https://www.instagram.com/amalasyrafs/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span class='fa fa-instagram'></span>
              </a>
              <a
                className='btn btn-social-icon btn-linkedin'
                href='https://www.linkedin.com/in/amalasyrafs/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span class='fa fa-linkedin'></span>
              </a>
              <a
                className='btn btn-social-icon btn-github'
                href='https://github.com/amalasyrafs'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span class='fa fa-github'></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
