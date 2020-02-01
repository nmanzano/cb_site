import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import classes from './App.module.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Aux from './hoc/Aux/Aux';

class App extends Component {

  render(){
    return (
      <Aux>
        <Switch>
          <Route path="/" component={WelcomePage}></Route>
        </Switch>
      </Aux>
    );
  }
}

export default App;
