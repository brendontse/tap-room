import React from 'react';

const aboutUsStyles = {
  marginTop: 100,
  marginLeft: '40rem',
  marginRight: '30rem',
  paddingTop: '4rem',
  paddingLeft: '20rem',
  paddingBottom: '4rem',
  backgroundColor: 'rgba(0, 0, 0, 0.64)',
  maxWidth: '115.5rem',
  minWidth: '115.5rem',
};

const imgStyles = {
  maxWidth: '70rem',
  minWidth: '70rem'
};

function AboutUs() {
  return (
    <div>
      <div style={aboutUsStyles}>
        <h1>About Us</h1>
        <h4>We have huge selection of kegs such as Corona Light and Corona Extra!</h4>
        <img style={imgStyles} src="https://www.glengarrywines.co.nz/images/v10/brands/corona.png" />
      </div>
    </div>
  );
}

export default AboutUs;