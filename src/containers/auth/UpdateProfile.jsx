import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSRFToken from '../../components/CSRFToken';
import { updateUserProfile } from '../../actions/profile';
import { Navigate } from 'react-router-dom';

class UpdateProfile extends Component {
    state = { 
        formData: {
            first_name: '',
            last_name: '',
            other_name: '',
            email: '',
            phone: '',
            city: ''
        },
        profileUpdated: false,
        foo: false,
        bar: true
    } 

    componentDidMount = () =>{
        this.setState({
            ...this.state,
            formData: this.props.profile
        })
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        var formData = {...this.state.formData}
        formData[name] = value
        console.log({[name]: value})
        this.setState({
          formData: formData
        });
        console.log(this.state.formData)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { first_name, last_name, other_name, email, phone, city } = this.state.formData;
        const { updateUserProfile } = this.props;

        if (first_name !== '' && last_name !== '' && other_name !== '' && email !== '' && phone !== '' && city !== '') {
            updateUserProfile(first_name, last_name, other_name, email, phone, city);
            this.setState({
                ...this.state,
                profileUpdated: true
            })
            console.log(this.state.formData)
        }
    }

    render() { 
        if (this.state.profileUpdated){
          if (this.state.foo || this.state.bar){
            this.setState({bar: false})
            return (<Navigate to="/auth/profile" />);
          }
        }
        const { formData } = this.state;
        const profile = formData
        return (
            <>
                <div className="container col-md-6">
                <h3 className='text-center'>Update your profile</h3>
                <form onSubmit={this.handleSubmit}>
                    <CSRFToken />
                    <div className="mb-3">
                        <label htmlFor="inputFirstname" className="form-label">First Name</label>
                        <input onChange={this.handleInputChange} value={profile.first_name} name='first_name' type="text" className="form-control" id="inputFirstname" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputLastname" className="form-label">Last Name</label>
                        <input onChange={this.handleInputChange} value={profile.last_name} name='last_name' type="text" className="form-control" id="inputLastname" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputOthername" className="form-label">Other Name</label>
                        <input onChange={this.handleInputChange} value={profile.other_name} name='other_name' type="text" className="form-control" id="inputOthername" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input onChange={this.handleInputChange} value={profile.email} name='email' type="email" className="form-control" id="inputEmail" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                        <input onChange={this.handleInputChange} value={profile.phone} name='phone' type="tel" className="form-control" id="inputPhone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input onChange={this.handleInputChange} value={profile.city} name='city' type="text" className="form-control" id="inputCity" />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
            </>
        );
    }
}

const mapStateToProps = state =>({
    profile: state.profile
})
 
export default connect(mapStateToProps, { updateUserProfile })(UpdateProfile);