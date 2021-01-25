import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <HomeAboutSection />

      <div className='container-fluid' id='home'>
        <div className='home-div media' id='tic-tac'>
          <Link to='/game'>
            <img
              src='/assets/images/forests.jpeg'
              alt='feature-img'
              className='feature-img'
            />
          </Link>
          <div className='media-body'>
            <h3>Tic-Tac</h3>
            <p>
              Simple Tic-Tac Game. Implementation was guided with tutorial from
              Create-React-App tutorial from official React site, helping me to
              understand the basics of React and the usage of its functionality.
            </p>
          </div>
        </div>
        <div className='home-div media ' id='weather'>
          <div className='media-body'>
            <h3>Weather</h3>
            <p>
              A Simple Weather Application. The data is fetched from API
              endpoint from OpenWeatherMap. Current implementation is fetching
              current weather at the specified location and display the
              information. This application helped me to understand the use of
              React hooks and using API.
            </p>
            <a href='https://openweathermap.org/'>
              <p>The OpenWeatherMap API</p>
            </a>
          </div>
          <Link to='/weather'>
            <img
              src='/assets/images/forests.jpeg'
              alt='feature-img'
              className='feature-img'
            />
          </Link>
        </div>
        <div className='home-div media ' id='recipe'>
          <Link to='/recipe'>
            <img
              src='/assets/images/forests.jpeg'
              alt='feature-img'
              className='feature-img'
            />
          </Link>
          <div className='media-body'>
            <h3>Recipe</h3>
            <p className='mb-1'>
              Recipe App by Dev Ed. A simple React Recipe App based on tutorial
              from channel DevelopedByEd on Youtube. The tutorial and
              implementation helped me to further understand API and React Hooks
              and state management and designing in client-side. The data is
              fetched from API endpoint Edamam API.
            </p>
            <a href='https://www.youtube.com/c/DevEd'>
              <p className='mb-0'>DevelopedByEd on Youtube</p>
            </a>
            <a href='https://developer.edamam.com/'>
              <p>The Edamam API</p>
            </a>
          </div>
        </div>
        <div className='home-div media' id='covid-19'>
          <div className='media-body'>
            <h3>Covid-19 Survey Form</h3>
            <p>This feature is under development.</p>
            <p>
              Loren ipsum ... Simple Tic-Tac Game. Implementation was guided
              with tutorial from Create-React-App tutorial from official React
              site, helping me to understand the basics of React and the usage
              of its functionality.
            </p>
          </div>
          <Link>
            <img
              src='/assets/images/forests.jpeg'
              alt='feature-img'
              className='feature-img'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

const HomeAboutSection = () => {
  return (
    <div>
      {/* Header and About Section */}
      <div className='container-fluid'>
        <div className='col-12 mb-5'>
          <img
            id='header-pic'
            src='assets/images/facewlaptop.png'
            alt='Header'
          />
        </div>
        <div className='row' id='info'>
          <div className='col-12 col-lg-6 mt-5 text-center'>
            <h3>One Stop Learning Center for amalasyrafs</h3>
            <p className='col-lg-7 offset-lg-3'>
              --This space is used and created by me, a self-taught programmer,
              who are creating and testing out features based from the tutorial
              and learning--
            </p>

            <p className='col-lg-7 offset-lg-3'>
              More details about each feature can be found below
            </p>
            <div className='mb-3'>
              <a href='#tic-tac'>Tic-Tac </a> <span> |</span>
              <a href='#weather'>Weather </a> <span> |</span>
              <a href='#recipe'>Recipe </a> <span> |</span>
              <a href='#covid-19'>Covid-19 Form </a>
            </div>
          </div>

          <div className='col-12 col-lg-5 offset-lg-1 mt-lg-5'>
            <h6 className='text-center'>
              Among technology and resources used in this website are as follow:
            </h6>
            <div className='offset-2'>
              <li>React</li>
              <li>Bootstrap</li>
              <li>API methods</li>
              <li>Fetch</li>
              <li>HTML</li>
              <li>CSS</li>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid mb-5 text-center mt-5'>
        <h2>Welcome to my React Website</h2>
        <h5>Explore The Content Below: </h5>
      </div>
    </div>
  );
};
