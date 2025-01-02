const express = require("express");
const User = require("../models/User");
const { json } = require("body-parser");


const router = express.Router();

//signup route
router.post("/signup", async (req , res) =>{
    try{
        const{email, password } = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400),json({message:"Email already exists"});
        }

        const newUser = new User({email, password});
        await newUser.save();

        res.status(201).json({message: "User registered successfully"});
    }catch(error){
        console.error("signup error:", error);
        res.status(500).json({messgae: "Server Error" });
    }
});

module.exports = router;