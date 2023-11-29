const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/User")

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/WT_mini")


app.use("/api/auth",require("./routes/auth"));
app.use("/api/auth",require("./routes/authlog"));
app.use("/api/chardet",require("./routes/chardet"));


app.listen(3001,()=>{
    console.log("server is running")
})