import * as React from 'react';
import logo from '../logo.svg';

export class Home extends React.Component {
  protected userName: string;

  constructor(props: any) {
    super(props);
    this.userName = props.match.params.userName;
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="App-intro">Given userName: {this.userName}</p>
      </div>
    );
  }
}
