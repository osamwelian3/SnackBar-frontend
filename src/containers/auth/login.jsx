import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSRFToken from '../../components/CSRFToken'
import { connect } from 'react-redux';
import { updateError, updateSuccess } from '../../actions/auth';
import $ from 'jquery';

class Login extends Component {
    state = { 
        success: ''
     } 

    componentDidMount() {
        /* global google */
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme: 'outline', size: 'large'}
        )

        try{
            this.setState({success: this.props.success.success})
        } catch{
            this.setState({success: ''})
        }
        localStorage.removeItem('accountCreated');
        
    }

    componentDidUpdate(){
        $(".loader").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
    }

    componentWillUnmount = () => {
        const { updateError, updateSuccess } = this.props;
        updateError({});
        updateSuccess({})
        $(".loader").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
    }

    render() { 
        const {error} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className='col-lg-2 col-md-3'></div>
                    <div className="checkout__form col-lg-8 col-md-6">
                        <h4 className='text-center'>Login</h4>
                        <p className='notify text-danger'>{localStorage.getItem('false') !== null ? localStorage.getItem('false') : localStorage.getItem('true')}</p>
                        <form onSubmit={this.props.onSubmit}>
                            <CSRFToken />
                            <p className='text-info'>{this.state.success}</p>
                            <p className='text-danger'>{ typeof(error) === 'object' ? error.error : '' }</p>
                            <div className="checkout__input mb-3">
                                <label htmlFor="inputUsername" className="form-label">Username</label>
                                <input onChange={this.props.onChange} name='username' type="text" className="form-controll" id="inputUsername" aria-describedby="usernameHelp" />
                            </div>
                            <div className="checkout__input mb-3">
                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                <input onChange={this.props.onChange} name='password' type="password" className="form-controll" id="inputPassword" />
                            </div>
                            <button type="submit" className="site-btn">Log In</button>
                            <br />
                            <p className='my-3'>OR</p>
                            <div id="signInDiv" className=''></div>
                        </form>
                        <p className='mt-3'>Don't have an account? <Link to="/auth/register">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.auth.error,
    success: state.auth.success
})
 
export default connect(mapStateToProps, { updateError, updateSuccess })(Login);