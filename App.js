import React, { Component } from 'react';
import  AppContainer  from './src/nav/AppNavigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <AppContainer />
    );
  }
}
