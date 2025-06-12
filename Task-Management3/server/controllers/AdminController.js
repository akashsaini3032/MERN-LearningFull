const AdminModel = require("../models/adminModel");


const adminLogin=async(req, res)=>{
     const { adminid, password }= req.body;
 
     try {
        const admin= await AdminModel.findOne({"id":adminid}) 
        if (!admin)
         {
            res.status(401).send({msg:"Invalid User Id"})
         }
 
         if (admin.password!=password)
        {
            res.status(401).send({msg:"Invalid Credentials!"});
         }


         res.status(200).send({admin:admin, msg:"Login Succesfully!" });
     } catch (error) {
         console.log(error);
     }
}

module.exports={
    adminLogin
}