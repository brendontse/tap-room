import React from 'react';

const aboutUsStyles = {
  marginTop: 100,
  marginLeft: '5%',
  marginRight: '8%',
  paddingTop: '2%',
  paddingLeft: '20%',
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
        <h4>We have huge variety of kegs such as Corona Light and Corona Extra!</h4>
        <img style={imgStyles} src="https://www.glengarrywines.co.nz/images/v10/brands/corona.png" />
      </div>
    </div>
  );
}

export default AboutUs;