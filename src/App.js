import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './hocs/Layout';
import ParentLayout from './hocs/ParentLayout';
import Authentication from './containers/authentication';
import Catalogue from './containers/catalogue';
import Home from './containers/catalogue/home';
import Navbar from './components/navbar';
import Dashboard from './containers/auth/Dashboard';
import jwtDecode from 'jwt-decode';
import { socialLogin } from './actions/auth';
import { connect } from 'react-redux';

import { Provider } from 'react-redux';
import store from './store';
import UserProfile from './containers/auth/Profile';
import UpdateProfile from './containers/auth/UpdateProfile';
import ProtectedRoutes from './hocs/ProtectedRoutes';
import CSRFToken from './components/CSRFToken';

import $ from 'jquery';
import { niceselect } from 'jquery-nice-select/js/jquery.nice-select.js';
import 'jquery-ui/ui/widgets/slider.js';
import {} from 'slicknav/dist/jquery.slicknav';
import Footer from './components/footer';
import CategoriesListing from './containers/catalogue/CategoriesListing';

// import {} from './../node_modules/bootstrap/dist/css/bootstrap.css';
// import {} from './../node_modules/bootstrap/dist/js/bootstrap.js';
// import {} from './../node_modules/font-awesome/css/font-awesome.min.css';
// import {} from './../node_modules/elegant-icons/style.css';
const mixitup = require('mixitup');
const {} = require('owl.carousel2');
export const jQuery = $;

class SocialComponent extends Component {
  state = {  } 

  handleCallbackResponse = (response, props=this.props) => {
    console.log(response)
    const { socialLogin } = props;
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    socialLogin(response);
  }

  componentDidMount(){
    /* global google */
    google.accounts.id.initialize({
      client_id: '496581959046-4nare9vd97he33ntetdmlrk2bfp4pgib.apps.googleusercontent.com',
      callback: this.handleCallbackResponse
    });

    const { isAuthenticated } = this.props;
    if(!isAuthenticated){
      /* global google */
      google.accounts.id.prompt();
    }
  }

  render() { 
    
    return (<></>);
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export const Social = connect(null, {socialLogin})(SocialComponent);

class App extends Component {
  state = { 
    navbar: <></>,
    footer: <></>
   } 

   componentDidUpdate = () => {

   }

   componentDidMount = () => {
    this.setState({navbar: <Navbar />});
    this.setState({footer: <Footer />});

   }

   componentWillUnmount = () => {

   }
  
  render() {
    return (
      <Provider store={store}>
        <Router>
           {this.state.navbar}
           <CSRFToken />
           <Social />
          <Routes>
            <Route path='/' element={<ParentLayout />}>
              <Route path='/' element={<Catalogue />}>
                <Route index element={<Home />} />
                <Route path='/category' element={<CategoriesListing />} />
              </Route>
              <Route path="/auth" element={<Layout />}>
                <Route path='/auth/*' element={<Authentication />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path='/auth/dashboard' element={<Dashboard />} />
                  <Route path='/auth/profile' element={<UserProfile />} />
                  <Route path='/auth/profile_update' element={<UpdateProfile />} />
                </Route>
                <Route path='/auth' element={<div className='text-danger m-5'>404 Page Not Found</div>} />
              </Route>
              <Route path='*' element={<div className='text-danger m-5'>404 Page Not Found</div>} />
            </Route>
          </Routes>
          {this.state.footer}
        </Router>
      </Provider>
      
    );
  }
}

 
export default App;
