import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <h3>{props.brand} | {props.name}</h3>
      <p><strong>{props.price} | {props.alcoholContent}</strong></p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Keg;