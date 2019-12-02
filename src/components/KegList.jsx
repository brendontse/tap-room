import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

// const kegListStyles = {
//   marginTop: 10,
// };

const kegStyles = {
  paddingLeft: '5%'
};


// function KegList(props) {
//   props.kegList.sort((a, b) => b.quantity - a.quantity);
//   return (
//     <div style={kegStyles}>
//       <hr/>
//       <h1 style={kegListStyles} >Available Kegs</h1>
//       <h4> All kegs come in 1/2 barrel sizes</h4>
//       <hr/>
//       {masterKegList.map((keg, index) =>
//         <Keg name={keg.name}
//           brand={keg.brand}
//           price={keg.price}
//           alcoholContent={keg.alcoholContent}
//           quantity={keg.quantity}
//           addQuantity={props.addQuantity}
//           reduceQuantity={props.reduceQuantity}
//           index={index}
//           key={keg.id}/>
//       )}
//     </div>
//   );
// }

function KegList(props) {
  return (
    <div style={kegStyles}>
      {props.kegList.map((keg, index) =>
        <Keg key={keg.Id}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          quantity={keg.quantity}
          index = {index}
        />
      )}
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