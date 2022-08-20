import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './hocs/Layout';
import Authentication from './containers/authentication';
import Catalogue from './containers/catalogue';
import Home from './containers/catalogue/home';
import Navbar from './components/navbar';
import Dashboard from './containers/auth/Dashboard';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  state = {  } 

  componentDidMount = () => {

  }
  
  render() { 
    return (
      <Provider store={store}>
        <Router>
          <Navbar /> 
          <Routes>
            <Route path='/' element={<Catalogue />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/auth" element={<Layout />}>
              <Route path='/auth/*' element={<Authentication />} />
              <Route path='/auth/dashboard' element={<Dashboard />} />
              <Route path='/auth' element={<div className='text-danger m-5'>404 Page Not Found</div>} />
            </Route>
            <Route path='*' element={<div className='text-danger m-5'>404 Page Not Found</div>} />
          </Routes>
        </Router>
      </Provider>
      
    );
  }
}
 
export default App;
