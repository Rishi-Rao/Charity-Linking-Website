const express = require("express");
const UserModel = require("../models/User");
const router = express.Router();

var isloged=false;

router.post('/register', async (req, res) => {
    console.log(req.body.Email)
    const checkUser = await UserModel.findOne({ Email: req.body.Email });
    try {
        //console.log(checkUser);
        if (checkUser) {
            res.status(400).json({ message: 'User already exists' });
        } else {
            const newUser = await UserModel.create(req.body);
            res.status(200).json({ message: 'User Created Hit Login to Login' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



module.exports = router;