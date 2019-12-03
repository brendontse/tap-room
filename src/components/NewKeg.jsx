import React from 'react';
import PropTypes from 'prop-types';

const newKegStyles = {
  paddingLeft: '42.5%',
  margin: '2%',
  paddingBottom: '2%',
  backgroundImage: '"url(${http://jackieos.com/wordpress/wp-content/uploads/2014/03/wood_background.jpg})"'
};

const inputStyle = {
  padding: 2,
  marginRight: 4
};

function NewKeg(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _quantity = 10;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, quantiy: _quantity });
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegSubmission} style={newKegStyles}>
        <p><input style={inputStyle}
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => { _name = input; }} /></p>
        <p><input
          type='text'
          id='brand'
          placeholder='Brand Name'
          ref={(input) => { _brand = input; }} /></p>
        <p><input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => { _price = input; }} /></p> 
        <p><input
          type='text'
          id='alcoholContent'
          placeholder='ABV'
          ref={(input) => { _alcoholContent = input; }} /></p>

        <p><button type='submit'>Submit</button></p>
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKeg;