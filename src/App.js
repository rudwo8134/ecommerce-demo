import React, {Component} from 'react';
import './App.css';

import {Route,Switch} from 'react-router-dom'

import {Homepage} from './Pages/homepage/homepage'
import Shoppage from './Pages/homepage/shopagage/shoppage'
import {Header} from './Components/header/header'
import Signinpagage from './Pages/homepage/signin andpage/signinpagage'
import {auth} from './firebase/firebase.util'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }
    unsubscribeFromAuth =null
    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
        this.setState({currentUser:user})
        console.log(user)
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
    
  
  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/shop' component={Shoppage}></Route>
      <Route exact path='/signin' component={Signinpagage}></Route>
      </Switch>
    </div>
  );
}
}

export default App;
