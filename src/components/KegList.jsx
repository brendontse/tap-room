import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';


function KegList(props) {
  
  const listStyle = {
    paddingLeft: '60rem',
  }

  const kegStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.64)',
    maxWidth: '70rem',
    paddingLeft: '4%',
    paddingRight: '4%',
    color: 'rgb(134, 158, 179)'
  }


  return (
    <div>
      <div style={listStyle}>
        <div style={kegStyle}>
          {props.kegList.map((keg, index) =>
            <Keg index={index}
              name={keg.name}
              brand={keg.brand}
              price={keg.price}
              alcoholContent={keg.alcoholContent}
              quantity={keg.quantity}
              addQuantity={props.addQuantity}
              reduceQuantity={props.reduceQuantity}
              key={index}
            />
          )}
        </div>
        <div>

        </div>
        
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