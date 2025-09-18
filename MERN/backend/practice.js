


const stuModels=require("../Models/stuModels");


const homePage=(req,res)=>{
    console.log("akash");
    res.send("ok");
};

const studentSave=(req,res)=>{
    const {rollno,name,city,fees}=req.body;

    const student=stuModels.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees,
    });

    res.send({msg:"akash"},myData:student);
}


const dataDisplay=async(req,res)=>{
    const Data=await stuModels.find();
    res.send(Data);
};

const updateshow=async(req,res)=>{
    const Data=await stuModels.find();
    res.send(Data);
};

const dataDelete=async(req,res)=>{


    const {myid}=req.query;

    const Data=await stuModels.findByIdAndDelete(myid);
    res.send({msg:"",Data:Data});
}




const editDataSave=async(req,res)=>{
    const {id,rollno,name,city,fees}=req.body;
    const Data= await stuModels.findByIdAndDelete(id,{rollno,name,city,fees});
    res.send({msg:"Data SucessFully Updated"});

}


const getSearhData=async(req,res)=.{
    const {rno}=req.query;
    const Data=await stuModels.find({"rollno":rno});
    res.send(Data);
}

module.exports={
    
}


