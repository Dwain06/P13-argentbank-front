import React from 'react';
import Footer from '../../components/Footer';
import MainNav from '../../components/MainNav';

const Register = () => {

    document.title = "Argent Bank - Register";

    return (
        <>
            <MainNav />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-plus sign-in-icon" />
                    <h1>Register</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input type="password" id="confirmPassword" />
                        </div>
                        
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
                        <a href="./user" className="sign-in-button">
                        Create account
                        </a>
                        {/* SHOULD BE THE BUTTON BELOW */}
                        {/* <button class="sign-in-button">Sign In</button> */}
                        {/*  */}
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Register;