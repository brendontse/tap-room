import React from 'react';

const aboutUsStyles = {
  marginTop: 100
};

const imgStyles = {
  width: 400,
  marginLeft: 300
};

function AboutUs() {
  return (
    <div style={aboutUsStyles}>
      <h1 >ABOUT US</h1>
      <p>We have huge variety of kegs such as regular Corona and Corona Extra!</p>
      <img style={imgStyles} src="https://www.glengarrywines.co.nz/images/v10/brands/corona.png" />
    </div>
  );
}

export default AboutUs;