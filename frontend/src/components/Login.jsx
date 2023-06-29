import React, { useState } from "react";
import "../resources/login.css";
import logo from "../assets/logo.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({

    email: '',
    password: ''
  })

  const handleInputChange = (event) => {

    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })

  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {

      const response = await axios.post("/api/users/login", formData)

      if (response.data.success) {
        console.log("message ", response.data.message);
        localStorage.setItem("token", response.data.data)
        message.success(response.data.message);
        navigate("/profile")
      } else {
        message.error(response.data.message);
      }
    } catch (error) {

      message.error(error.message)
    }
    console.log(formData);
  }

  return (
    <section className="App">
      <div className="register">
        <div className="col-1">
          <img src={logo} alt="" />
        </div>
        <div className="col-2">
          <h2>Log In</h2>
          <span>Welcome</span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="email" className="form-input" onChange={handleInputChange} />
            <input type="text" name="password" placeholder="password" className="form-input" onChange={handleInputChange} />
            <button className="btn">Log In</button>

          </form>
          <p>Don't have an account? <Link to="/signup" className="signBtn">Sign up now</Link></p>
        </div>
      </div>
    </section>
  );
}

export default Login;
