import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Import components
import Footer from '../../components/Footer';
import MainNav from '../../components/MainNav';
import { editUserData, setUserData } from '../../feature/userDataSlice';

// Import functions
import { getProfile } from '../../utils/profile'

const Profile = () => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData.userData);

    // Get user datas
    useEffect(() => {
        document.title = "Argent Bank - Profile page";
        getUserData();
    }, []);

    async function getUserData() {
        const getUserData = await getProfile();
        if (getUserData.status === 200) {
            dispatch(setUserData(getUserData.userData))
            console.log("useSelector", userData);
        } else {
            console.log("Error", getUserData.status);
        }
    }

    // Edit user name
    const [edit, setEdit] = useState(false);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const handleEdit = () => {

        setEdit(false);

        const data = {
            "firstName": firstName? firstName : userData.firstName,
            "lastName": lastName? lastName : userData.lastName
        };
        console.log(data);

        axios
        .put("http://localhost:3001/api/v1/user/profile", data)
        .then(() => {
            dispatch(editUserData(data));
        });
    };

    if (!userData) {
        return (
            <>
                <MainNav />
                <main className="main bg-dark">
                    <p className="loading">Loading...</p>
                </main>
                <Footer />
            </>
        );
    }

    // console.log("useSelector", userData);
    return (
        <>
            <MainNav />
            <main className="main bg-dark">

                {!edit ?
                    <div className="header">
                        <h1>
                            Welcome back
                            <br />
                            {userData?.firstName} {userData?.lastName}!
                        </h1>
                        <button className="edit-button" onClick={() => setEdit(!edit)}>Edit Name</button>
                    </div>
                    :
                    <div className="header">
                        <h1>
                            Welcome back
                        </h1>
                        <form className="edit-user-name">
                            <div className="input-container">
                                <div className="input-wrapper">
                                    <label htmlFor="firstNameEdit">First Name</label>
                                    <input type="text" id="firstNameEdit" autoComplete="off" defaultValue={userData?.firstName} onChange={e => setFirstName(e.target.value)} />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="lastNameEdit">Last Name</label>
                                    <input type="text" id="lastNameEdit" autoComplete="off" defaultValue={userData?.lastName} onChange={e => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="validate-form">
                                <button type="button" className="edit-button" onClick={() => handleEdit()}>Confirm</button>
                                <button type="button" className="edit-button" onClick={() => setEdit(!edit)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                }

                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Profile;