const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// Registering a user

const userRegister = async (req, res) => {

    try {

        const existingUser = await User.findOne({ email: req.body.email })
        if (existingUser) {
            return res.send({
                message: "User already exists",
                success: false,
                data: null
            });
        }

        const { name, email, dob, password, confirmPassword, number, question, address, city, state, zip, country } = req.body;

        if (!email || !number || !password || !confirmPassword || !name || !dob || !question || !address || !city || !state || !zip || !country) {
            return res.send({
                message: "Please fill in all the required fields",
                success: false,
                data: null
            });
        }

        let Number = req.body.number
        if (Number.toString().length != 10) {
            return res.send({
                message: "Please enter a valid mobile number"
            })
        }

        let Password = req.body.password
        if (Password.length < 6) {
            return res.send({
                message: "The Password needs to be atleast 6 character long",
                success: false,
                data: null
            })
        }

        if (req.body.password !== req.body.confirmPassword) {
            return res.send({
                message: "Password does not match",
                success: false,
                data: null
            })
        }



        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword
        const newUser = new User(req.body)
        await newUser.save();

        res.send({
            message: "User Successfully registered",
            success: true,
            data: null
        })
    } catch (error) {
        res.send({
            message: error.message,
            success: false,
            data: null
        })
    }
}


// Login a user

const userLogin = async (req, res) => {

    try {

        const userExists = await User.findOne({ email: req.body.email });

        if (!userExists) {
            return res.send({
                message: "User does not exist",
                success: false,
                data: null
            })
        }

        const passwordMatch = await bcrypt.compare(
            req.body.password,
            userExists.password
        );

        if (!passwordMatch) {
            return res.send({
                message: "Incorrect Password",
                success: false,
                data: null
            })
        }

        const token = jwt.sign(
            { userId: userExists._id },
            "test",
            { expiresIn: "5m" }
        );
        res.send({
            message: "User logged in successfully",
            success: true,
            data: token,
        });
    } catch (error) {
        res.send({
            message: error.message,
            success: false,
            data: null,
        });
    }
}

// Get each profile

const getProfile = async (req, res) => {

    try {

        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).send({
                message: "Authorization failed",
                success: false
            })
        }
        const decoded = jwt.verify(token, "test")

        req.body.userId = decoded.userId;

        const user = await User.findById(req.body.userId);
        res.send({
            message: "User fetched successfully",
            success: true,
            data: user,
        })
    } catch (error) {
        res.send({
            message: error.message,
            success: false,
            data: null,
        })
    }
}

// User logout

const userLogout = async (req, res) => {

    try {
        res.send({
            message: "Logged out successfully",
            success: true,
            data: null
        })
    } catch (error) {
        res.send({
            message: error.message,
            success: false,
            data: null,
        })
    }
}

module.exports = { userRegister, userLogin, getProfile, userLogout };