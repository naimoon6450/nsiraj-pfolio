import React, { Component } from 'react';
import IntroFunctional from './introFunctional';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id='colorlib-hero'
          className='js-fullheight'
          data-section='home'
        >
          <div className='flexslider js-fullheight'>
            <ul className='slides' style={{ opacity: 0.8 }}>
              <IntroFunctional image={'url(images/linkInpic.jpg)'} />
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
