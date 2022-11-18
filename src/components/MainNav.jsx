import React from 'react';
import { NavLink } from 'react-router-dom';

// Import images
import argentBankLogo from "../assets/logo/argentBankLogo.png";

const MainNav = () => {

    let isUserConnected = false;

    if (isUserConnected) {
        return (
            <>
                <nav className="main-nav">
                    <NavLink className="main-nav-logo" to="/">
                        <img
                            className="main-nav-logo-image"
                            src={argentBankLogo}
                            alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </NavLink>
                    <div>
                        <NavLink className="main-nav-item" to="/sign-in">
                            <i className="fa fa-user-circle" />
                            Tony
                        </NavLink>
                        <NavLink className="main-nav-item" to="/">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    </div>
                </nav>
            </>
        );
    }
    return (
        <>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink className="main-nav-item" to="/sign-in">
                        <i className="fa fa-user-circle" />
                        Sign In
                    </NavLink>
                    <NavLink className="main-nav-item" to="/register">
                        <i className="fa fa-user-plus" />
                        Register
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default MainNav;