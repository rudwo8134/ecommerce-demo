import React, {Component} from 'react';
import './App.css';

import {Route,Switch, Redirect} from 'react-router-dom'

import {Homepage} from './Pages/homepage/homepage'
import Shoppage from './Pages/homepage/shopagage/shoppage'
import Header from './Components/header/header'
import Signinpagage from './Pages/homepage/signin andpage/signinpagage'
import {auth} from './firebase/firebase.util'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'

import {createUserProfileDocument} from './firebase/firebase.util'

class App extends Component{
  
    unsubscribeFromAuth =null
    componentDidMount() {
      const {setCurrentUser} = this.props
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userauth =>{
        if(userauth){
          const userRef = await createUserProfileDocument(userauth)
          userRef.onSnapshot(snapshot=>{
            setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
              
            })
          })
        }
        else{
          setCurrentUser(userauth)
        }
      })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
    
  
  render(){
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/shop' component={Shoppage}></Route>
      <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/'/>): <Signinpagage/>}></Route>
      </Switch>
    </div>
  );
}
}

const mapStatetoProps = ({user})=>({
  currentUser: user.currentUser
})

const mapDispatchToprops = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStatetoProps, mapDispatchToprops)(App);