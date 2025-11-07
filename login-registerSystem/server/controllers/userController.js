const UserModel=require("../models/userModel");

const userRegistration=async(req,res)=>{
    const {name, contact, email, password}= req.body;

    try{
        const User= await UserModel.create({
            name:name,
            contact:contact,
            email:email,
            password:password
        })
        res.status(200).send("User Successfully Created!!!");

    } catch(error){
        console.log(error);
    }
}


const userLogin=async(req,res)=>{
    const {email, password}= req.body;

    try{
        const User=await UserModel.findOne({email:email});
        if(!User){
            res.status(401).send({msg:"Invalid Email"});
        }
        if(User.password!=password)
        {
            res.status(401).send({msg:"Invalid Password"});
        }

        res.status(200).send({User:User, msg:"Login Successfully"});
    } catch(error){
        console.log(error);
    }
}

module.exports={
    userRegistration,
    userLogin
}