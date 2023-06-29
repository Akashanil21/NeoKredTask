import React, { useEffect, useState } from "react";
import "../resources/profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function Profile() {

    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const getUser = async () => {

        try {
            const response = await axios.get("/api/users/get-user-by-id", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            if (response.data.success) {
                setUser(response.data.data)
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            message.error(error.message)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const handleLogout = async () => {
        try {
            const response = await axios.get("/api/users/logout")
            if (response.data.success) {
                message.success(response.data.message);
                localStorage.removeItem('token');
                navigate("/")
            }
        } catch (error) {
            message.error(error.message)
        }
    }

    return (
        <div>
            <header class="navbar">
                <div class="navbar-container">
                    <div class="company-name">NeoKred</div>
                    <button class="logout-button" onClick={handleLogout}>Logout</button>
                </div>
            </header>
            <section class="profile">
                <div class="profile-container">
                    <h2>Profile</h2>
                    <div class="profile-details">
                        <div class="profile-item">
                            <h4>Name:</h4>
                            <p>{user.name}</p>
                        </div>
                        <div class="profile-item">
                            <h4>Email:</h4>
                            <p>{user.email}</p>
                        </div>
                        <div class="profile-item">
                            <h4>Date of Birth:</h4>
                            <p>{user.dob}</p>
                        </div>
                        <div class="profile-item">
                            <h4>Phone Number:</h4>
                            <p>{user.number}</p>
                        </div>
                        <div class="profile-item">
                            <h4>Address:</h4>
                            <p>{user.address}</p>
                        </div>
                        <div class="profile-item">
                            <h4>City:</h4>
                            <p>{user.city}</p>
                        </div>
                        <div class="profile-item">
                            <h4>State:</h4>
                            <p>{user.state}</p>
                        </div>
                        <div class="profile-item">
                            <h4>ZIP code:</h4>
                            <p>{user.zip}</p>
                        </div>
                        <div class="profile-item">
                            <h4>Country:</h4>
                            <p>{user.country}</p>
                        </div>
                        <div class="profile-item">
                            <h4>Security Question:</h4>
                            <p>{user.question}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
