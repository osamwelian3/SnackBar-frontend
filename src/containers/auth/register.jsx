import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSRFToken from '../../components/CSRFToken'

class Register extends Component {

    render() { 
        return (
            <div className="container col-md-6">
                <h3 className='text-center'>Register</h3>
                <form onSubmit={this.props.onSubmit}>
                    <CSRFToken />
                    <div className="mb-3">
                        <label htmlFor="inputUsername" className="form-label">Username</label>
                        <input onChange={this.props.onChange} name='username' type="text" className="form-control" id="inputUsername" aria-describedby="usernameHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input onChange={this.props.onChange} name='email' type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input onChange={this.props.onChange} name='password' type="password" className="form-control" id="inputPassword" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword2" className="form-label">Confirm Password</label>
                        <input onChange={this.props.onChange} name='password2' type="password" className="form-control" id="inputPassword2" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
                <p className='mt-3'>Already have an account? <Link to="/auth/login">Log in</Link></p>
            </div>
        );
    }
}
 
export default Register;