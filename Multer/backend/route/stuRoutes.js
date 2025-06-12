const express=require("express")
const route=express.Router()
const multer =require("multer");
const stuController=require("../Controllers/stuControllers")
// route.get("/home",stuController.homePage)
route.get("/display",stuController.displayData)
// route.get("/search",stuController.searchData)


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/');
    },

    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
})

const upload=multer({storage:storage});


route.post("/save",upload.single("image"),stuController.studentSave)



// route.get("/update",stuController.updateShow)
// route.delete("/datadelete",stuController.dataDelete)
// route.get("/edit",stuController.editdataShow);
// route.put("/editdatasave",stuController.editDataSave);

module.exports= route