import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Import functions
import { isToken, logout } from '../utils/login'

// Import images
import argentBankLogo from "../assets/logo/argentBankLogo.png";

const MainNav = () => {

    const userFirstName = useSelector((state) => state.userData.userData.firstName);
    
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        isToken() ? setAuth(true) : setAuth(false);
    }, [auth])

    if (auth) {
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
                        <NavLink className="main-nav-item" to="/profile">
                            <i className="fa fa-user-circle" />
                            {userFirstName}
                        </NavLink>
                        <NavLink className="main-nav-item" to="/" onClick={() => {setAuth(false); logout()}}>
                            <i className="fa fa-sign-out"></i>
                            Logout
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
                    <NavLink className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle" />
                        Login
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