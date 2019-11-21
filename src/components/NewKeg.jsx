import React from 'react';

const newKegStyles = {
  paddingLeft: '5%',
  margin: '2%',
  paddingBottom: '2%'
};

function NewKeg(){
  return (
    <div>
      <form style={newKegStyles}>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand Name'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          type='text'
          id='alcoholContent'
          placeholder='ABV'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewKeg;