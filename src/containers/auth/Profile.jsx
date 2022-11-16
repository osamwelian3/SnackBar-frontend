import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
    state = {  } 
    
    profileHtml = (profile) =>(
        <>
        <ol className="list-group ">
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold">First Name</div>
                {profile.first_name}
                </div>
                {/* <span className="badge bg-primary rounded-pill">14</span> */}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold">Last Name</div>
                {profile.last_name}
                </div>
                {/* <span className="badge bg-primary rounded-pill">14</span> */}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold">Other Name</div>
                {profile.other_name}
                </div>
                {/* <span className="badge bg-primary rounded-pill">14</span> */}
            </li><li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold">Email</div>
                {profile.email}
                </div>
                {/* <span className="badge bg-primary rounded-pill">14</span> */}
            </li><li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold">Phone</div>
                {profile.phone}
                </div>
                {/* <span className="badge bg-primary rounded-pill">14</span> */}
            </li><li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                <div className="fw-bold">City</div>
                {profile.city}
                </div>
                {/* <span className="badge bg-primary rounded-pill">14</span> */}
            </li>
        </ol>
        <Link className='d-block mt-3' to='/auth/profile_update'>Update Profile</Link>
        </>
    )

    render() { 
        const { profile, detail } = this.props;
        return (
            <div className='continer col-6 mx-auto'>
                <h3>My Profile</h3>
                {detail === null ? this.profileHtml(profile) : <p>{detail} <Link to='/auth/profile_update'>Click here</Link> to update</p>}
                
            </div>
        );
    }
}

const mapStateToProps = state =>({
    profile: state.profile,
    detail: state.profile.detail || null
})
 
export default connect(mapStateToProps, {})(UserProfile);