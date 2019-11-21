import React from 'react';
import Keg from './Keg';

const kegListStyles = {
  marginTop: 10,
};

const kegStyles = {
  paddingLeft: '5%'
};

var masterKegList = [
  {
    name: 'Corona Extra',
    brand: 'Corona',
    price: '$100',
    alcoholContent: '4.6%'
  },
  {
    name: 'Corona Light',
    brand: 'Corona',
    price: '$100',
    alcoholContent: '4.5%'
  },
  {
    name: 'Corona Premier',
    brand: 'Corona',
    price: '$110',
    alcoholContent: '4%'
  },
  {
    name: 'Corona Familiar',
    brand: 'Corona',
    price: '$110',
    alcoholContent: '6%'
  },

];

function KegList() {
  return (
    <div style={kegStyles}>
      <hr/>
      <h1 style={kegListStyles} >Available Kegs</h1>
      <h4> All kegs come in 1/2 barrel sizes</h4>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;