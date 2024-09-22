import express from 'express'
import User from '../models/userModal.js'

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch(error) {
        res.status(501).json({
                message: `Server Error`
            })
    }
}

const getUserByEmail = async (req, res) => {
  try {
    const email  = req.query.email;

    const user = await User.findOne({ email });

    if (user) {
        return res.status(200).json({
            user: user.name,
            email: user.email,
            age: user.age,
        })
    } else {
        return res.status(400).json({
            message: "User not found"
        })
    }
  } catch (error) {
    res.status(500).json({
        message: 'Error while fetching'
    })
  }
}

const addUser = async (req, res) => {
    const { name, email, age } = req.body;
    console.log(req.body)

    try {
        const newUser = new User({ name, email, age })
        await newUser.save();
        res.status(201).json({
            name: newUser.name,
            email: newUser.email,
            age: newUser.age
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error adding user'
        })
    }
}

export {
    getUsers,
    getUserByEmail,
    addUser
}