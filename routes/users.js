// const User = require("../models/User");
// const router = require("express").Router();
//
// router.get("/",(req,res)=>{
//     res.send("hey its auth route")
// })
//

//
// module.exports = router

const express = require("express")
const router = express.Router()

const userModel = require("../models/User")

router.get("/user",(req,res)=>{
    res.send("hey its user route")
})

router.post("/user/save", async (req, res)=>{
    const {username, email, password} = req.body
    const data = {username, email, password}
    await userModel.create(data).then(data=>{
        if(data)
            res.send(data+"User Save !")

        else
            res.send(false)
    }).catch(err=>{
        if(err)res.send(err.message())
    })
})

module.exports = router;