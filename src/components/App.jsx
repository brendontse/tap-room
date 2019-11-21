import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const globalStyles = {

};


function App(){
  return (
    <div style={globalStyles}>
      <Header/>
      <Switch>
        <Route exact path='/about' component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App; 