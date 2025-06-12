const express=require("express")
const route=express.Router()
const stuController=require("../Controllers/stuControllers")
route.get("/home",stuController.homePage)
route.get("/display",stuController.displayData)
route.get("/search",stuController.searchData)
route.post("/save",stuController.studentSave)
route.get("/update",stuController.updateShow)
route.delete("/datadelete",stuController.dataDelete)
route.get("/edit",stuController.editdataShow);
route.put("/editdatasave",stuController.editDataSave);

module.exports= route