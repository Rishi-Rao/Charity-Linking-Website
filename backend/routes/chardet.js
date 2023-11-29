const express = require("express");
const CharModel = require("../models/Char");
const router = express.Router();


router.post('/charities',async (req,res)=>
{
    if(req.body.Need==='others' || req.body.Need==='money')
    {
        var getChar = await CharModel.find().exec()
    }
    else
    {
        var getChar = await CharModel.find({Need:req.body.Need}).exec()
    }
    try{
    if(getChar.toString()!='')
    {
        for(charity in getChar)
        {
            console.log((getChar[charity]));
        }
        res.status(200).json(getChar);
    }
    else
    {
        res.status(404).json({ message: 'No charity found'});
    }}
    catch(err)
    {
        res.status(500).json({messege: 'Internal Server Error'})
        console.error(err)
    }

})

module.exports=router;