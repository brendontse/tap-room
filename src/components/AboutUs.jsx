import React from 'react';

const aboutUsStyles = {
  marginTop: 100,
  marginLeft: '5%',
  marginRight: '5%',

  paddingLeft: '10%',
  backgroundColor: '#a2faff'
};

const imgStyles = {
  width: 900,
};

function AboutUs() {
  return (
    <div>
      <div style={aboutUsStyles}>
        <h1>About Us</h1>
        <p>We have huge variety of kegs such as regular Corona and Corona Extra!</p>
        <img style={imgStyles} src="https://www.glengarrywines.co.nz/images/v10/brands/corona.png" />
      </div>
    </div>
  );
}

export default AboutUs;