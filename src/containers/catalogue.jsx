import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Catalogue extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Outlet />
            </>
        );
    }
}
 
export default Catalogue;