import React from 'react';
import './App.css';

import {Route,Switch} from 'react-router-dom'

import {Homepage} from './Pages/homepage/homepage'
import Shoppage from './Pages/homepage/shopagage/shoppage'
import {Header} from './Components/header/header'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/shop' component={Shoppage}></Route>
      </Switch>
    </div>
  );
}

export default App;
