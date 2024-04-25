const {Connect,Sql,Disconnect,Test} =require("../db/database")
const bcrypt=require("bcrypt")
const User=require("../models/user")

module.exports={
    signUp:asnyc=(req,res)=>
{   
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);
},
login:asnyc=(req,res)=>
{   
    console.log(User.getAllUsers())
}
}