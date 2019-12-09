import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-about' data-section='about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-12'>
                <div
                  className='row row-bottom-padded-sm animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='col-md-12'>
                    <div className='about-desc'>
                      <span className='heading-meta'>About Me</span>
                      {/* <h2 className="colorlib-heading">Who Am I?</h2> */}
                      <p>
                        Former Cloud Migration Consultant turned Fullstack
                        Engineer. I graduated from Columbia University with a
                        degree in Chemical Engineering. Accenture was my door to
                        a career in Tech, but everything was too high level and
                        I wanted to get into the weeds of technology.
                      </p>
                      <p>
                        Did a lot of research on coding bootcamps and finally
                        decided to pursue Fullstack Academy part-time. I
                        graduated from FSA in September 2019 and have been
                        carving a dev role for myself at Accenture in hopes to
                        gain some industry-level coding experience.
                      </p>
                      <p>
                        Outside of work I love to climb (bouldering
                        specifically), read, listen to podcasts, dance, and
                        write poetry!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='colorlib-about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>What I do?</span>
                {/* <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2> */}
              </div>
            </div>
            <div className='row row-pt-md'>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-3'>
                  <span className='icon'>
                    <i className='icon-data' />
                  </span>
                  <div className='desc'>
                    <h3>Fullstack Development</h3>
                    <p>
                      Recent graduate of Fullstack Academy (Sept 2019), and
                      looking to pursue my passion of becoming a Software
                      Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-1'>
                  <span className='icon'>
                    <i className='icon-cloud3' />
                  </span>
                  <div className='desc'>
                    <h3>Cloud Migration & Transformation</h3>
                    <p>
                      I have a dearth of experience in cloud transformation
                      projects (ie. O365, Citrix, AWS) and have led various
                      workstreams globally
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-5'>
                  <span className='icon'>
                    <i className='icon-file' />
                  </span>
                  <div className='desc'>
                    <h3>Project Management & Release Planning</h3>
                    <p>
                      Experienced in project management, product releast
                      planning/deployment, and data analysis / scripting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
