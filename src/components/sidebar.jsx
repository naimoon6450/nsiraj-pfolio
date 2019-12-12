import React, { Component } from 'react';
import Particles from 'react-particles-js';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </nav>

        <aside id="colorlib-aside" className="border js-fullheight">
          <Particles className="particles" params={partOptions} />
          <div className="text-center">
            <div
              className="author-img"
              style={{
                backgroundImage: 'url(images/ns_va.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'left',
              }}
            />
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#home" data-nav-section="home">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" data-nav-section="experience">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/naimunsiraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nsiraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-linkedin2" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/naimoon6450"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://naimunsiraj.wordpress.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon-wordpress"></i>
                </a>
              </li>
            </ul>
          </nav>
          {/* <div className='colorlib-footer'></div> */}
        </aside>
      </div>
    );
  }
}

// settings for particle effect
export const partOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#000000',
    },
    line_linked: {
      color: '#708090',
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 2,
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      repulse: {
        distance: 50,
        duration: 0.4,
      },
    },
  },
};
