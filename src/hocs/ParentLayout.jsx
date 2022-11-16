import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuthentication } from '../actions/auth';
import { loadUserProfile } from '../actions/profile';

class ParentLayout extends Component {
    state = {  } 

    componentDidMount = () =>{
      const { checkAuthentication, loadUserProfile } = this.props
      checkAuthentication();
      loadUserProfile();
    }

    render() { 
        return (
            <>
                <Outlet />
            </>
        );
    }
}
 
export default connect(null, { checkAuthentication, loadUserProfile })(ParentLayout);
