import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Experience</span>
                {/* <h2 className="colorlib-heading animate-box">Timeline</h2> */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div
                        className="timeline-icon color-3"
                        style={{
                          backgroundImage: 'url(images/acn_logo.png)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'left',
                        }}
                      >
                        {/* <i className='icon-pen2' /> */}
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Accenture
                          <span className="durations">2015 - Present</span>
                        </h2>
                        <h6 className="roles">
                          Cloud Migration & Software Engineering Consultant
                        </h6>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div
                        className="timeline-icon color-4"
                        style={{
                          backgroundImage: 'url(images/fsa.jpg)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'left',
                        }}
                      ></div>
                      <div className="timeline-label">
                        <h2>
                          Fullstack Academy
                          <span className="durations">2019</span>
                        </h2>
                        <h6 className="roles">
                          Part-Time (Flex) Program | NERP Stack
                        </h6>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div
                        className="timeline-icon color-4"
                        style={{
                          backgroundImage: 'url(images/cu_logo.png)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'left',
                        }}
                      ></div>
                      <div className="timeline-label">
                        <h2>
                          Columbia University, School of Engineering & Applied
                          Sciences (SEAS)
                          <span className="durations">2011 - 2015</span>
                        </h2>
                        <h6 className="roles">B.S. Chemical Engineering</h6>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
