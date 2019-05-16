/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import '../styles/App.css';
import { AppProvider } from './AppProvider';
import Logic from './Logic';

class App extends Component {
 
  render() {
    return (
      <AppProvider>
        <Logic />
      </AppProvider>
    );
  };
}

export default App;



