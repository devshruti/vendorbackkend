const express = require("express");
const vendorModel = require("../model/Vendor");





exports.createVendor = async (req, res) => {
  try {
    const {
      vendorName,
      bankAccountNo,
      bankName,
      addressOne,
      addressTwo,
      city,
      country,
      zipCode,
    } = req.body;
    if (vendorName && bankAccountNo && bankName) {
      const createVendor = new vendorModel({
        vendorName: vendorName,
        bankAccountNo: bankAccountNo,
        bankName: bankName,
        addressOne: addressOne,
        addressTwo: addressTwo,
        city: city,
        country: country,
        zipCode: zipCode,
      });
      await createVendor.save();
      res.status(200).send({
        message: "Vendor Created Successfully",
        data: createVendor,
      });
    } else {
      res.status(201).send("Please fill the required feileds");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllVendors = async (req, res) => {
  try {
    const allVendors = await vendorModel.find();
    if (!allVendors) res.status(201).send("No vendors are available");
    else
      res.status(200).send({
        data: allVendors,
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.vendorEdit = async (req, res) => {
  try {
    const {
      vendorId,
      vendorName,
      bankAccountNo,
      bankName,
      addressOne,
      addressTwo,
      city,
      country,
      zipCode,
    } = req.body;
    if(!vendorId){
        res.status(500).send("please provide vendor id")
    }else{
        const updateVendor = await vendorModel.findByIdAndUpdate(
            {_id : vendorId},
            {
                vendorName: vendorName,
                bankAccountNo: bankAccountNo,
                bankName: bankName,
                addressOne: addressOne,
                addressTwo: addressTwo,
                city: city,
                country: country,
                zipCode: zipCode,
            }
        )
        if(!updateVendor) res.status(500).send("Something Went Wrong")
        else
        res.status(200).send({
            message : "Updateed Successfully"
        })
        
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteVendor = async (req,res)=>{
    try {
        const {vendorId} = req.params;
        if(!vendorId){
            res.status(500).send("please provide vendor id")
        }else{
            const deleteVendor = await vendorModel.findByIdAndDelete({_id:vendorId})
            res.status(200).send({
                message : "deleted successfully"
            })
            console.log(deleteVendor)
        }
    } catch (error) {
        res.status(500).send(error);
    }
}
