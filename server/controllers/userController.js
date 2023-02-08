const User = require('../models/userModel.js')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id:_id},process.env.SECRET,{expiresIn:'2d'})
}


//login
const loginUser = async(req,res)=>{
    const {username,password} = req.body
    try{
        const user = await User.login(username,password)
        const token = createToken(user._id)
        //find jobtitle from db
        const jobtitle = user.jobtitle
        res.status(200).json({username,token,jobtitle})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

//signUp

const signUpUser = async(req,res)=>{
    const{username,password,jobtitle,fullname} = req.body
    try{
        const user = await User.signUp(username,password,jobtitle,fullname)
        //create token
        const token = createToken(user._id)
        
        res.status(200).json({username,token,jobtitle})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    loginUser,
    signUpUser
}

