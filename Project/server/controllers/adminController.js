const AdminModel= require("../models/adminModel");

const multer=require('multer');
const {CloudinaryStorage}=require('multer-storage-cloudinary');
const cloudinary=require('_/cloudinary');



const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'project',
        format: async(req,file)=>'jpg',
        public_id:(req,file)=>Date.now()+'-'+ file.originalname,


    
    },
});





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
