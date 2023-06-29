import React from 'react'
import '../resources/profile.css'

function Profile() {
    return (
        <div>
            <header class="navbar">
                <div class="navbar-container">
                    <div class="company-name">NeoKred</div>
                    <button class="logout-button">Logout</button>
                </div>
            </header>
            <section class="profile">
                <div class="profile-container">
                    {/* <button class="logout-button">Logout</button> */}
                    <h2>Profile</h2>
                    <div class="profile-details">
                        <div class="profile-item">
                            <h4>Name:</h4>
                            <p>John Doe</p>
                        </div>
                        <div class="profile-item">
                            <h4>Email:</h4>
                            <p>johndoe@example.com</p>
                        </div>
                        <div class="profile-item">
                            <h4>Date of Birth:</h4>
                            <p>January 1, 1990</p>
                        </div>
                        <div class="profile-item">
                            <h4>Phone Number:</h4>
                            <p>1234567890</p>
                        </div>
                        <div class="profile-item">
                            <h4>Address:</h4>
                            <p></p>
                        </div>
                        <div class="profile-item">
                            <h4>Address:</h4>
                            <p></p>
                        </div>
                        <div class="profile-item">
                            <h4>City:</h4>
                            <p></p>
                        </div>
                        <div class="profile-item">
                            <h4>State:</h4>
                            <p></p>
                        </div>
                        <div class="profile-item">
                            <h4>ZIP code:</h4>
                            <p></p>
                        </div>
                        <div class="profile-item">
                            <h4>Country:</h4>
                            <p></p>
                        </div>
                        <div class="profile-item">
                            <h4>Security:</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Profile
