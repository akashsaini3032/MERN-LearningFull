
const stuModels=require=("../Models/stuModels");

const homePage=(req,res)=>{
    console.log("iam homepage fnc");
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
    res.send({msg:"aksh",myData:student});
};

const dataDisplay=async(req,res)=>{
    const Data=await stuModels.find();
    res.send(Data);
};


const updateShow=async(req,res)=>{
    const Data=await stuModels.find();
    res.send(Data);
};


const dataDelete=async(req,res)=>{
    const Data=await stuModels.find();
    res.send(data);
};


const editDataSave=async(req,res)=>{
    const {_id,rollno,name,city,fees}=req.body;
    const Data=await stuModels.findByIdAndUpdate(_id,{rollno,name,fees});


    res.send({msg:"Daya"});
}

const getSearchData=async(req,res)=>{
    const {rno}=req.query;
    const Data=await stuModels.find({"rollno":rno})
    res.send(Data);
}


module.exports={
    
}
