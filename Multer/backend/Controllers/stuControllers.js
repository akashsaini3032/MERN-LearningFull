const stuModels = require("../Modles/stuModels")


const studentSave=async(req,res)=>{

const imgname=req.file.path;
const{rollno,name,city,fees}=req.body;

const Student=await stuModels.create({
  rollno:rollno,
    name:name,
    city:city,
    fees:fees,
    image:imgname
})

res.send({msg:"Data Inserted", Student:Student });

}
const displayData=async(req,res)=>{

  const Student=await stuModels.find();
  res.send(Student);
  
}


module.exports={
    studentSave,displayData
}
// multer=>relationships=>task manager