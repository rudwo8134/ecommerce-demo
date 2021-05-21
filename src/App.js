import React from 'react';
import './App.css';

import {Route,Switch} from 'react-router-dom'

import {Homepage} from './Pages/homepage/homepage'

const Example = () =>{
return(
  <div>
    <h1> route</h1>
  </div>
)
}

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/lol' component={Example}></Route>
      </Switch>
    </div>
  );
}

export default App;
