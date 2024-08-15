

import React from 'react';
import './index.css';

const Profile = () => {
    return (
        <div>
           
            <section className="profile-section">
            {/* <h1>Profile</h1> */}
                <div className="container-profile">
                   
                    <div className="profile-header">
                        <img src="https://static.vecteezy.com/system/resources/previews/007/522/850/original/business-man-icon-for-your-web-profile-free-vector.jpg" alt="Profile" className="profile-pic" />
                        <h1>John Doe</h1>
                        <button className="sign-out">Sign Out</button>
                    </div>
                    <div className="profile-details">
                        <h2>About Me</h2>
                        <p>Hi, I'm John Doe, a travel enthusiast and budget management expert. I have been traveling around the world for the past 10 years, and I love sharing my experiences and tips with fellow travelers.</p>
                        <h2>Contact Information</h2>
                        <p>Email: john.doe@example.com</p>
                        <p>Phone: +123-456-7890</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
