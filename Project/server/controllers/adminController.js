const AdminModel= require("../models/adminModel");


const adminLogin=async(req, res)=>{
    const { adminid , password } = req.body;  
    const Admin= await AdminModel.findOne({adminid:adminid});
    if (!Admin)
    {
        res.status(401).send({msg:"Invalid Admin ID"});
    }

    if (Admin.password!=password)
    {
         res.status(401).send({msg:"Invalid Credentials!"});
    }

  
    res.status(201).send(Admin);

}

module.exports={
    adminLogin
}
