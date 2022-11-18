import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import MainNav from '../../components/MainNav';


const SignIn = () => {
    
    document.title = "Argent Bank - Sign-in";
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();
    
    async function loginUser(username, password) {
        return axios
        .post('http://localhost:3001/api/v1/user/login', { email: username, password: password })
        .then(response => response.data.body)
        .catch(function (error) {
            setError(true);})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const token = await loginUser(username, password);
        console.log(token);
        if (token) navigate("/user");
    }

    return (
        <>
            <MainNav />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon" />
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={error ? "input-wrapper wrong-label" : "input-wrapper"}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" autoComplete="off" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className={error ? "input-wrapper wrong-label" : "input-wrapper"}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button type='submit' className="sign-in-button">Sign In</button>
                        {error ? <span className='wrong-login'>Wrong Username or Password</span> : ""}
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SignIn;