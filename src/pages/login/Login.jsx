import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import components
import Footer from '../../components/Footer';
import MainNav from '../../components/MainNav';

// Import functions
import { loginUser } from '../../utils/login'


const Login = () => {
    
    useEffect(() => {
        document.title = "Argent Bank - Login";
    }, []) 
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const [rememberLogin, setRememberLogin] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const token = await loginUser(username, password, rememberLogin);
        if (token.status === 200){
            navigate("/profile");
        } else {
            setError(true);
        }
    }

    return (
        <>
            <MainNav />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon" />
                    <h1>Login</h1>
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
                            <input type="checkbox" id="remember-me" onChange={() => setRememberLogin(!rememberLogin)}/>
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

export default Login;