import React, { useState } from "react";
import "../resources/register.css";
import logo from "../assets/logo.jpg";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd'

function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({

    name: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
    number: '',
    question: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  })

  const handleInputChange = (event) => {

    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })

  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {

      const response = await axios.post("/api/users/register", formData)

      if (response.data.success) {
        console.log("message ", response.data.message);
        message.success(response.data.message);
        navigate("/")
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
          <h2>Sign Up</h2>
          <span>Welcome</span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-input"
                onChange={handleInputChange}
              />
              <input type="email" name="email" placeholder="Email" className="form-input" onChange={handleInputChange} />
            </div>
            <div className="flex">
              <input
                type="text"
                name="dob"
                placeholder="Date of Birth"
                className="form-input"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex">
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                className="form-input"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex">
              <textarea
                type="text"
                name="question"
                placeholder="Security question"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex">
              <textarea
                type="text"
                name="address"
                placeholder="Address"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex">
              <input type="text" name="city" placeholder="City" className="form-input" onChange={handleInputChange} />
              <input type="text" name="state" placeholder="State" className="form-input" onChange={handleInputChange} />
            </div>
            <div className="flex">
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                className="form-input"
                onChange={handleInputChange}
              />
              <input type="text" name="country" placeholder="Country" className="form-input" onChange={handleInputChange} />
            </div>

            <button className="btn">Sign Up</button>
          </form>
          <p>Already have an account? <Link to="/" className="signBtn"> Login now</Link></p>
        </div>
      </div>
    </section>
  );
}

export default Register;
