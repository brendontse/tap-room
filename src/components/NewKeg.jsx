import React from 'react';

const newKegStyles = {
  paddingLeft: '5%',
  margin: '2%',
  paddingBottom: '2%'
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
  let _quantity = 20;

  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, quantiy: _quantity, id: v4()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegSubmission} style={newKegStyles}>
        <input style={inputStyle}
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => {_name = input;}} />
        <input
          type='text'
          id='brand'
          placeholder='Brand Name'
          ref={(input) => {_brand = input;}} />
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}} /> 
        <input
          type='text'
          id='alcoholContent'
          placeholder='ABV'
          ref={(input) => {_alcoholContent = input;}} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKeg;