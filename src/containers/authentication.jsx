import React, { Component, Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './auth/login';
import Register from './auth/register';
import { connect } from 'react-redux';
import { register, login, logout, updateError, updateSuccess } from '../actions/auth';
import $ from 'jquery';

class Authentication extends Component {
  state = {
    formData: { 
      username: '',
      email: '',
      password: '',
      password2: ''
    },
    accountCreated: false,
    success: {},
    foo: false,
    bar: true
  }

  componentDidMount(){
    const {success} = this.props;
    this.setState({
      ...this.state,
      success: success
    })
    
  }

  componentDidUpdate(){
    
    
  }

  loading(){
    console.log('submit');
    $('#root > #preloader').remove();
    $('#root').append(`
      <div id="preloader">
        <div class="loader"></div>
      </div>
    `);
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.loading();
    console.log('formData: ' + JSON.stringify(this.state.formData))
    const { username, password } = this.state.formData;
    const { login } = this.props;

    if (username !== '' && password !== '') {
      login(username, password);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.loading();
    const { username, email, password, password2 } = this.state.formData;
    const { register } = this.props;
    this.setState({accountCreated: false})

    if (password === password2) {
      register(username, email, password, password2);
    } else {
      const { updateError } = this.props;
      updateError({'error': 'Passwords do not match', 'password2': 'password error'});
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
    const { isAuthenticated, error, success } = this.props;
    console.log(success.success)
    if (isAuthenticated){
      return (<Navigate to="/category" />);
    }

    return (
      <>
      <Routes>
        <Route path='register' element={<Register credentials={this.state} onSubmit={this.handleSubmit} onChange={this.handleInputChange} />} />
        <Route path='login' element={<Login onSubmit={this.handleLogin} onChange={this.handleInputChange} />} />
        <Route path='*' element={<div className='text-danger m-5'>404 Page Not Found</div>} />
      </Routes>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
  success: state.auth.success
})
 
export default connect(mapStateToProps, { register, login, logout, updateError, updateSuccess })(Authentication);
