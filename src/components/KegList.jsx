import React from 'react';
import Keg from './Keg';



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
];

function KegList() {
  return (
    <div>
      <hr/>
      <h1 >Available Kegs</h1>
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