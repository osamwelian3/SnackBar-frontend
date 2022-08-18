import React, { Component } from 'react';

class Register extends Component {

    render() { 
        return (
            <div className="container col-md-6">
                <h3 className='text-center'>Register</h3>
                <form onSubmit={this.props.onSubmit}>
                    <div class="mb-3">
                        <label for="inputUsername" class="form-label">Username</label>
                        <input onChange={this.props.onChange} name='username' type="text" class="form-control" id="inputUsername" aria-describedby="usernameHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input onChange={this.props.onChange} name='email' type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="inputPassword" class="form-label">Password</label>
                        <input onChange={this.props.onChange} name='password' type="password" class="form-control" id="inputPassword" />
                    </div>
                    <div class="mb-3">
                        <label for="inputPassword2" class="form-label">Confirm Password</label>
                        <input onChange={this.props.onChange} name='password2' type="password" class="form-control" id="inputPassword2" />
                    </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
            </div>
        );
    }
}
 
export default Register;