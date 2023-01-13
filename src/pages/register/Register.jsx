import React, { useEffect } from 'react';
import { useRef } from 'react';

// Import components
import Footer from '../../components/Footer';
import MainNav from '../../components/MainNav';
import { createProfile } from '../../utils/profile';


const Register = () => {

    useEffect(() => {
        document.title = "Argent Bank - Register";
    }, [])

    const inputFirstName = useRef();
    const inputLastName = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const inputConfirmPassword = useRef();

    const emailRegex = /^[\w.+\-]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+$/i;

    // Submit user datas to create profile if all inputs are OK
    async function submitProfile(data) {
        const checkProfile = await createProfile(data);

        if (checkProfile.status === 200) {
            cancelInputError("sign-in-button");

            document.querySelector("#register-form").innerHTML =
                `
                    <p class="user-created">User succefully created !</p>
                    <p>Please go to login page<p/>
                    <button onclick="location.href = '/login';" class="sign-in-button" >Login</button>
                `;
        } else {
            throwInputError("sign-in-button", checkProfile.errorMessage);
        }
    }

    const throwInputError = (parentNodeId, message) => {
        // Checking if error already exist
        if (document.querySelector("#" + parentNodeId + " + .wrong-login")) {
            const span = document.querySelector("#" + parentNodeId + " + .wrong-login")
            span.innerText = message;
        } else {
            const span = document.createElement("span");
            span.classList.add("wrong-login");
            span.innerText = message;
            const parentNode = document.getElementById(parentNodeId);
            parentNode.insertAdjacentElement("afterend", span);
        }
    }

    const cancelInputError = (parentNodeId) => {
        const span = document.querySelector("#" + parentNodeId + " + .wrong-login");
        if (span) span.innerText = "";
    }

    // Verifying form inputs
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            "email": undefined,
            "password": undefined,
            "firstName": undefined,
            "lastName": undefined
        };

        if (inputPassword.current.value.length > 3 && inputPassword.current.value.length < 13) {
            cancelInputError("confirmPassword");
            if (inputPassword.current.value === inputConfirmPassword.current.value) {
                cancelInputError("confirmPassword");
                data.password = inputPassword.current.value;
            } else {
                throwInputError("confirmPassword", "Confirmation password does not match");
            }
        } else {
            throwInputError("confirmPassword", "Password must contain between 4 and 12 characters");
        }
        if (inputFirstName.current.value.trim().length > 2) {
            cancelInputError("firstName");
            data.firstName = inputFirstName.current.value;
        } else {
            throwInputError("firstName", "Your firstname must contain at least 3 characters")
        }
        if (inputLastName.current.value.trim().length > 2) {
            cancelInputError("lastName");
            data.lastName = inputLastName.current.value;
        } else {
            throwInputError("lastName", "Your lastname must contain at least 3 characters")
        }
        if (emailRegex.test(inputEmail.current.value)) {
            cancelInputError("email");
            data.email = inputEmail.current.value;
        } else {
            throwInputError("email", "Your email is not valid")
        }
        if (data.email && data.password && data.firstName && data.lastName) {
            submitProfile(data);
        }
    }


    return (
        <>
            <MainNav />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-plus sign-in-icon" />
                    <h1>Register</h1>
                    <form id="register-form" onSubmit={(e) => handleSubmit(e)} autoComplete="off">
                        <div className="input-wrapper">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" ref={inputFirstName} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" ref={inputLastName} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" ref={inputEmail} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" ref={inputPassword} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input type="password" id="confirmPassword" ref={inputConfirmPassword} />
                        </div>
                        <button className="sign-in-button" id="sign-in-button" type="submit">Create account</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Register;