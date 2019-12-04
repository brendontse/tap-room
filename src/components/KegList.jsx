import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';


function KegList(props) {
  return (
    <div>
      <div >
        {props.kegList.map((keg, index) =>
          <Keg index={index}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            quantity={keg.quantity}
          />
        )}
      </div>
      <div>

      </div>
      
    </div>
  );
}

// should KegList be an array?

KegList.propTypes = {
  kegList: PropTypes.array,
  addQuantity: PropTypes.func,
  reduceQuantity: PropTypes.func,
  index: PropTypes.number
};
 
export default KegList;