const express = require("express")
const router = express.Router()
const vendorController = require("../controller/vendorController")

router.post("/createVendor", vendorController.createVendor)
router.get("/getAllVendors", vendorController.getAllVendors)
router.put("/vendorEdit", vendorController.vendorEdit)
router.delete("/deleteVendor/:vendorId", vendorController.deleteVendor)



module.exports=router