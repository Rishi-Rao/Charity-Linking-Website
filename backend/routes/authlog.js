const express = require("express");
const UserModel = require("../models/User");
const router = express.Router();

var isloged=false;

router.post('/login',async (req,res) => {
    try {
        const checkUser = await UserModel.findOne({ Email: req.body.Email });
        console.log(checkUser);
        if (checkUser) {
            if(checkUser.Password===req.body.Password)
            {res.status(200).json({ message: 'Log in success',logged:true });}
            else
            {res.status(400).json({ message: 'Incorrect Password',logged:false });}            
        } 
        else {
            res.status(404).json({ message: 'No User',logged:false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
module.exports = router;
