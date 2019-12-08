import React from 'react';
import Typewriter from 'typewriter-effect';

const itemArr = [
  'My name is Naimun',
  'Climbing is Life',
  'Coding is Love',
  'Dancing is Passion',
];

const IntroFunctional = () => {
  return (
    <div className="overlay">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
            <div className="slider-text-inner js-fullheight">
              <div className="desc type_w">
                <Typewriter
                  options={{
                    strings: itemArr,
                    autoStart: true,
                    loop: true,
                    cursor: '<',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroFunctional;
