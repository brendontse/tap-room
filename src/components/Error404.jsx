import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div style={{ textAlign: 'center', padding: '404px' }}>
      <h1>Error! This page doesn't exist!</h1>
      <h3>Return <Link to="/">home</Link>.</h3>
    </div>
  );
}

export default Error404;