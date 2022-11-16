import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import CSRFToken from '../../components/CSRFToken'
import { connect } from 'react-redux';
import { updateError } from '../../actions/auth';
import $ from 'jquery';

class Register extends Component {

    componentDidUpdate(){
        const { error } = this.props;
        if(typeof(error) === 'object' && Object.keys(error).length > 0){
            $(".loader").fadeOut();
            $("#preloader").delay(200).fadeOut("slow");
            console.log('updated');
        }
        
    }

    componentWillUnmount = () => {
        const { updateError, error } = this.props;
        if(typeof(error) === 'object'){
            updateError({})
        }
        
        $(".loader").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
        console.log('register will unmount');
    }

    render() { 
        const accountCreated = localStorage.getItem('accountCreated');
        if(accountCreated === 'true'){
            return (<Navigate to="/auth/dashboard" />);
        }

        let { error } = this.props;
        console.log(typeof(error));
        if(typeof(error) === 'undefined'){
            error = {};
            console.log('is now an object');
        }
        console.log(typeof(error));
        console.log('username' in error);
        return (
            <div className="container">
                <div className="row">
                    <div className='col-lg-2 col-md-3'></div>
                    <div className="checkout__form col-lg-8 col-md-6">
                        <h4 className='text-center'>Register</h4>
                        <p className='notify text-danger'>{localStorage.getItem('false') !== null ? localStorage.getItem('false') : localStorage.getItem('true')}</p>
                        <form onSubmit={this.props.onSubmit}>
                            <CSRFToken />
                            <div className="checkout__input mb-3">
                                <label htmlFor="inputUsername" className="form-label">Username  { 'username' in error ? <span className='text-danger'>{error.error}</span> : ''}</label>
                                <p className='d-inline'><span>*</span></p>
                                <input onChange={this.props.onChange} name='username' type="text" className="form-controll" id="inputUsername" aria-describedby="usernameHelp" />
                            </div>
                            <div className="checkout__input mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <p className='d-inline'><span>*</span></p>
                                <input onChange={this.props.onChange} name='email' type="email" className="form-controll" id="inputEmail" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="checkout__input mb-3">
                                <label htmlFor="inputPassword" className="form-label">Password  { 'password' in error ? <span className='text-danger'>{error.error}</span> : ''}</label>
                                <p className='d-inline'><span>*</span></p>
                                <input onChange={this.props.onChange} name='password' type="password" className="form-controll" id="inputPassword" />
                            </div>
                            <div className="checkout__input mb-3">
                                <label htmlFor="inputPassword2" className="form-label">Confirm Password  { 'password2' in error ? <span className='text-danger'>{error.error}</span> : ''}</label>
                                <p className='d-inline'><span>*</span></p>
                                <input onChange={this.props.onChange} name='password2' type="password" className="form-controll" id="inputPassword2" />
                            </div>
                            <button type="submit" className="site-btn">Sign Up</button>
                        </form>
                        <p className='mt-3'>Already have an account? <Link to="/auth/login">Log in</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    error: state.auth.error
})
 
export default connect(mapStateToProps, { updateError })(Register);
