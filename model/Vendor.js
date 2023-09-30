const mongoose = require("mongoose")

const VendorSchema = new mongoose.Schema({

    vendorName:{
        type:String,
        required:true,
        trim:true
    },
    bankAccountNo:{
        type:String,
        required:true,
        trim:true
    },
    bankName:{
        type:String,
        required:true,
        trim:true
    },
    addressOne:{
        type:String,
        trim:true
    },
    addressTwo:{
        type:String,
        trim:true
    },
    city:{
        type:String,
        trim:true
    },
    country:{
        type:String,
        trim:true
    },
    zipCode:{
        type:Number,
        trim:true
    },

})



const vendorModel = mongoose.model("vendor", VendorSchema)
module.exports = vendorModel;