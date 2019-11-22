import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){

  function handleAddQuantity() {
    props.addQuantity(props.index);
  }

  function handleReduceQuantity() {
    props.reduceQuantity(props.index);
  }
  
  return (
    <div>
      <h3>{props.brand} - {props.name}</h3>
      <p><strong>{props.price} - {props.alcoholContent}</strong></p>
      <p><button onClick={handleAddQuantity} className='material-icons'>Stock More</button> <button onClick={handleReduceQuantity} className='material-icons'>Sell a Pint</button> | {props.quantity}</p>
      <hr/>
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