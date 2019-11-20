import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
  backgroundColor: 'rgb(133, 233, 162)',
};

const ulStyles = {
  listStyleType: 'none',
  padding: 30,
  overflow: 'hidden',
};

const liStyles = {
  float: 'left',
  borderRight: '1px solid black',
  borderLeft: '1px solid black',
  position: 'relative',
  left: '42%'
};

const aStyles = {
  display: 'block',
  textAlign: 'center',
  padding: '8px 12px',
};

function Header() {
  return (
    <div style={headerStyles} >
      <ul style={ulStyles}>
        <li style={liStyles}><a style={aStyles}><Link to="/about">About Us</Link></a></li>
        <li style={liStyles}><a style={aStyles}><Link to="/keglist">List of Kegs</Link></a></li>
        <li style={liStyles}><a style={aStyles}><Link to="/newkeg">Add a new Keg</Link></a></li>
      </ul> 
    </div>
  );
}

export default Header;