import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Register from './components/auth/register';

class App extends Component {
  state = { 
    username: 'test',
    email: '',
    password: '',
    password2: ''
  } 

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    console.log({[name]: value})
    this.setState({
      [name]: value
    });
  }

  render() { 
    return (
      <Fragment >
        <Navbar />
        <Register credentials={this.state} onSubmit={this.handleSubmit} onChange={this.handleInputChange} />
      </Fragment>
    );
  }
}
 
export default App;
