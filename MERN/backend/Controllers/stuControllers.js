



const stuModels = require("../Modles/stuModels");

const homePage = (req, res) => {
  console.log("iam homePage fnc");
  res.send("ok");
};
const studentSave = (req, res) => {
  const { rollno, name, city, fees } = req.body;
  const student = stuModels.create({
    rollno: rollno,
    name: name,
    city: city,
    fees: fees,
  });
  res.send({ msg: "Yah message backend se aaya hai", myData: student });
};

const dataDisplay = async (req, res) => {
  const Data = await stuModels.find();
  res.send(Data);
};

const updateShow = async (req, res) => {
  const Data = await stuModels.find();
  res.send(Data);
};
const dataDelete = async (req, res) => {
  // console.log("Delete function called")
  // res.send("Okkkk")

  // console.log(req.query)

  res.send("oooooooo");
  const { myid } = req.query;
  const Data = await stuModels.findByIdAndDelete(myid);
  res.send({ msg: "data deleted", Data: Data });
};

const editdataShow=async(req,res)=>{
  const {id}=req.query;

  const Data= await stuModels.findById(id);
  res.send(Data);
}



const editDataSave=async(req,res)=>{
  const {_id, rollno,name, city, fees}=req.body;
  const Data= await stuModels.findByIdAndUpdate(_id, {rollno,name,city,fees});

  res.send({msg:"Data Successfully Updated"});

}

const getSearchData=async(req,res)=>{
  const {rno}=req.query;
  const Data= await stuModels.find({"rollno":rno});
  res.send(Data);
}


module.exports = {
  homePage,
  studentSave,
  dataDisplay,
  updateShow,
  dataDelete,
  editdataShow,
  editDataSave,
  getSearchData
};