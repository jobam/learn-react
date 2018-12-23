import * as React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { Home } from './home/Home';

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/:userName" component={Home} />
      </Switch>
    );
  }
}

export default App;
