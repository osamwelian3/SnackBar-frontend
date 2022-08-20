import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './auth/login';
import Register from './auth/register';
import { connect } from 'react-redux';
import { register } from '../actions/auth';

class Authentication extends Component {
  state = {
    formData: { 
      username: 'test',
      email: '',
      password: '',
      password2: ''
    },
    accountCreated: false
  }

  componentDidMount(){
    

    console.log('Authentication mounted')
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, password2 } = this.state.formData;
    const { register } = this.props;

    if (password === password2) {
      register(username, email, password, password2);
      this.setState({accountCreated: true})
      console.log(this.state.formData)
    }

  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    var formData = {...this.state.formData}
    formData[name] = value
    // console.log({[name]: value})
    this.setState({
      formData: formData
    });
  }

  render() { 
    if (this.state.accountCreated){
      return <Navigate to="/login" />;
    }
    return (
      <>
      <Routes>
        <Route path='register' element={<Register credentials={this.state} onSubmit={this.handleSubmit} onChange={this.handleInputChange} />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<div className='text-danger m-5'>404 Page Not Found</div>} />
      </Routes>
      </>
    );
  }
}
 
export default connect(null, { register })(Authentication);
