// const UserModel= require("../models/userModel");
// const TaskModel= require("../models/taskModel");

// const loginCheck=async(req, res)=>{
//     const { email, password}=req.body;
    
//     try {
//           const User = await UserModel.findOne({email:email});
//           if (!User)
//           {
//             res.status(400).send({msg:"Invalid Email Id!"})
//           }
//           if (User.password!=password)
//           {
//              res.status(400).send({msg:"Invalid Password!"})
//           }
//           res.status(200).send({msg:"Login Successfully!", User})
//     } catch (error) {
//          console.log(error);
//     }
     
// }

// const myTaskList=async(req, res)=>{
//   const { id } = req.query;
//   console.log(id);
//    try {
//         const Task= await TaskModel.find({userid:id});
//         console.log(Task);
//         res.status(200).send(Task);
//    } catch (error) {
//      console.log(error);
//    }
// }



// module.exports={
//     loginCheck,
//     myTaskList
// }


const UserModel = require("../models/userModel");
const TaskModel = require("../models/taskModel");

const loginCheck = async (req, res) => {
    const { email, password } = req.body;

    try {
        const User = await UserModel.findOne({ email: email });
        if (!User) {
            return res.status(400).send({ msg: "Invalid Email Id!" });
        }
        if (User.password != password) {
            return res.status(400).send({ msg: "Invalid Password!" });
        }
        res.status(200).send({ msg: "Login Successfully!", User });
    } catch (error) {
        console.log(error);
    }
};

const myTaskList = async (req, res) => {
    const { id } = req.query;
    try {
        const Task = await TaskModel.find({ userid: id });
        res.status(200).send(Task);
    } catch (error) {
        console.log(error);
    }
};

// ✅ NEW FUNCTION
const submitTaskWithCompday = async (req, res) => {
    const { id } = req.params; // task ID
    const { days } = req.body; // days input

    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(
            id,
            {
                compday: days,
                submitted: true
            },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).send({ msg: "Task not found" });
        }

        res.status(200).send({ msg: "Task submitted", task: updatedTask });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Server error" });
    }
};

module.exports = {
    loginCheck,
    myTaskList,
    submitTaskWithCompday // ✅ export new function
};
