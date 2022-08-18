import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <Fragment >
        <Navbar />
      </Fragment>
    );
  }
}
 
export default App;
