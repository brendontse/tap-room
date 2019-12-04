import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import KegList from './KegList';
import NewKegForm from './NewKeg';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css';


// const globalStyles = {
//   backgroundColor: '#ffa2cd'
// };



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


  // placeholder for homepage route

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={AboutUs} /> 
          <Route exact path='/about' component={AboutUs} /> 
          <Route exact path='/keglist' render={() => <KegList kegList={this.state.masterKegList} addQuantity={this.handleAddQuantity} reduceQuantity={this.handleReduceQuantity} /> } /> 
          <Route path='/newkeg' render={() => <NewKegForm onNewKegCreation={this.handleNewKegToList} /> } />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
export default App; 