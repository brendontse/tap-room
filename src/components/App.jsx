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


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleNewKegToList = this.handleNewKegToList.bind(this);
    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleReduceQuantity = this.handleReduceQuantity.bind(this);
  }

  handleNewKegToList(newKeg) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  handleAddQuantity(index) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList[index].quantity ++;
    this.setState({ masterKegList: newMasterKegList });
  }

  handleReduceQuantity(index) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList[index].quantity --;
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <div style={globalStyles}>
        <Header/>
        <Switch>
          <Route exact path='/about' component={AboutUs} /> 
          <Route exact path='/keglist' component={KegList} /> 
          <Route exact path='/keglist' render={() => <KegList kegList={this.state.masterKegList} addQuantity={this.state.handleAddQuantity} reduceQuantity={this.state.handleReduceQuantity} /> } /> 
          <Route path='/newkeg' render={() => <NewKegForm onNewKegCreation={this.handleNewKegToList} /> } />
        </Switch>
      </div>
    );
  }
}
export default App; 