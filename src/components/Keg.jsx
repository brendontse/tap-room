import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){

  const infoStyle = {
    color: '#rgb(134, 158, 179)',
    paddingTop: '1.5rem',
    borderTop: '1px solid white',

  }

  function handleAddQuantity() {
    props.addQuantity(props.index);
  }

  function handleReduceQuantity() {
    props.reduceQuantity(props.index);
  }
  // const kegStyle = {
  //   display: 'inline-flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // };

  //quantity is not returning????

  return (
    <div>
      <div style={infoStyle}>
        <h3>{props.brand} | {props.name}</h3>
        <p><strong>{props.price} | {props.alcoholContent}</strong></p>
        <p><button onClick={handleReduceQuantity}>Sale (-1)</button> 
          <button onClick={handleAddQuantity}>Restock (+1)</button>
        </p>
          <p>Current Inventory: {props.quantity}</p>
        <hr/>
      </div>
    </div>
  );
}
 
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  addQuantity: PropTypes.func,
  reduceQuantity: PropTypes.func,
  index: PropTypes.number
};

export default Keg;