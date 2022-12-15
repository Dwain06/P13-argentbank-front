import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import components
import Footer from '../../components/Footer';
import MainNav from '../../components/MainNav';
import { setUserData } from '../../feature/userDataSlice';

// Import functions
import { getProfile } from '../../utils/profile'

const Profile = () => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData.userData);
    // console.log("useSelector", userData.userData);

    useEffect(() => {
        document.title = "Argent Bank - Profile page";
        // getProfile();
        getUserData();
    }, []);

    async function getUserData() {
        const userData = await getProfile();
        if (userData.status === 200) {
            dispatch(setUserData(userData.userData))
        } else {
            console.log("Error", userData.status);
        }
    }

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

    return (
        <>
            <MainNav />
            <main className="main bg-dark">
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {userData?.firstName} {userData?.lastName}!
                    </h1>
                    <button className="edit-button">Edit Name</button>
                </div>
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