import React from 'react';
import { Link } from 'react-router-dom';

const headerStyles = {
  backgroundColor: 'black',
  paddingLeft: '38%',
  
};

const ulStyles = {
  listStyleType: 'none',
  padding: '3rem',
  overflow: 'hidden',
};

const liStyles = {
  float: 'left',
  borderRight: '1px solid white',
  borderLeft: '1px solid white',
  position: 'relative',
};

const aStyles = {
  display: 'block',
  textAlign: 'center',
  padding: '8px 12px',
  color: 'white'
};

function Header() {
  return (
    <div style={headerStyles} >
      <ul style={ulStyles}>
        <li style={liStyles}><span style={aStyles}><Link to="/newkeg">Add New Kegs</Link></span></li>  
        <li style={liStyles}><span style={aStyles}><Link to="/about">About Us</Link></span></li>
        <li style={liStyles}><span style={aStyles}><Link to="/keglist">Keg List</Link></span></li>
      </ul> 
    </div>
  );
}

export default Header;