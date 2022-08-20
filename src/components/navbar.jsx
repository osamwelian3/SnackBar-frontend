import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

class Navbar extends Component {
    state = {  } 

    guestLinks = (
        <Fragment>
            <NavLink className="nav-link" to="/auth/register">Sign up</NavLink>
            <NavLink className="nav-link" to="/auth/login">Login</NavLink>
        </Fragment>
    )

    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-light mb-5">
                <div className="container">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/auth/dashboard">Dashboard</NavLink>
                        {true && this.guestLinks}
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;