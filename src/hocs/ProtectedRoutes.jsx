import React, { Component } from 'react';
import { Route, Outlet, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../containers/auth/login';

class ProtectedRoutes extends Component {
    state = {  } 
    render() { 
        const {isAuthenticated} = this.props;

        if (isAuthenticated){
            return (
                <Outlet />
            );
        } else {
            return (<Navigate to="/auth/login" />);
        }
        
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
 
export default connect(mapStateToProps, { })(ProtectedRoutes);
