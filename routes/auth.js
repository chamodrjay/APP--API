const express = require("express")
const router = express.Router()

const authModel = require("../models/authModel")

router.get("/api/auth",(req,res)=>{
    res.send("hey its auth route")
})

router.post("/api/auth/register", async (req, res)=>{
    const {username, email, password} = req.body
    const data = {username, email, password}
    await authModel.create(data).then(data=>{
        if(data)
            res.send(data+"Auth Save !")

        else
            res.send(false)
    }).catch(err=>{
        if(err)res.send(err.message())
    })
})

module.exports = router;



// const router = require("express").Router();
// const User = require("../models/User");


//REGISTER
// router.get("/register", async (req,res) => {
//   const user = await new User({
//     username:"chamo",
//     email:"chamo@gmail.com",
//     password:"123456"
//   })
//
//   await user.save()
//   res.send("ok")
// });




// module.exports = router;
