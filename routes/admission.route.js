const express = require("express");
const {admit,getAdmissions,getSingleAdmission,updateAdmission } = require("../controller/admission.controller");
const admissionRouter = express.Router();

admissionRouter.post('/postData', admit);
admissionRouter.get('/getAdmissions',getAdmissions)
admissionRouter.get('/single',getSingleAdmission)
admissionRouter.put('/update/:id',updateAdmission)

module.exports = { admissionRouter};