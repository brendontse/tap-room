import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';




// const kegStyles = {
//   paddingLeft: '5%',
//   zIndex: '1',
//   position: 'absolute'
// };

// const imgStyles = {
//   width: '1920px',
//   height: '836px'
// };

// const imgDivStyles = {
//   zIndex: '0',
//   position: 'relative'
// }

let imgUrl = 'http://jackieos.com/wordpress/wp-content/uploads/2014/03/wood_background.jpg';
let styles = {
  backgroundImage: 'url(' + imgUrl + ')',
  backgroundSize: 'cover',
  overflow: 'hidden',
};

function KegList(props) {
  return (
    <div>
      <div >
        {props.kegList.map((keg, index) =>
          <Keg key={index}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            quantity={keg.quantity}
          />
        )}
      </div>
      <div style={styles}>

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