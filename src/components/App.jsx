import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import KegList from './KegList';
import NewKegForm from './NewKeg';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const globalStyles = {
  backgroundColor: '#ffa2cd'
};


function App(){
  return (
    <div style={globalStyles}>
      <Header/>
      <Switch>
        <Route exact path='/keglist' component={KegList} /> 
        <Route exact path='/about' component={AboutUs} />
        <Route path='/newkeg' component={NewKegForm} />
      </Switch>
    </div>
  );
}

export default App; 