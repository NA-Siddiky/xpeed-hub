import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import ProfileList from '../Profile/ProfileList/ProfileList'
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>This is homepage</h1>
            <ProfileList></ProfileList>
        </div>
    );
};

export default Home;