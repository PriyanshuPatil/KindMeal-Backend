const { admissionModel} = require("../model/admission.model");
const admit  = async (req, res) => {
    console.log(req.body.user_data);
    try {
      const  isPresent = await admissionModel.findOne({email :req.body.user_data.email})
      console.log(req.body.user_data.email);
      if(isPresent){
        console.log("already")

        return res.status(201).send({ msg: "already present" }) ;
      }else{
        const new_admission = new admissionModel(req.body.user_data);
        await new_admission.save();
        console.log("bn gya")

       res.status(201).send({ msg: "admitted" }) ;
   } 
      }
      catch (err) {
      res.status(400).send({ msg: err.message});
      console.log("err")
    }
  };
  const getAdmissions = async (req, res) => {
    try {
      const admissions = await admissionModel.find();
      res.send(admissions);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  };
  const getSingleAdmission = async (req, res) => {
    const myQuery = req.query
    console.log(myQuery)
    try {
      
      const  isPresent = await admissionModel.findOne({email :myQuery.email})
    
      if(isPresent){
        console.log(isPresent)
        return res.status(201).send({ data: isPresent }) ;
        
      }else{
        console.log("dwn")
        return res.status(201).send({data: [] }) 
   } 
      }
      catch (err) {
      res.status(400).send({ msg: err.message});
      console.log("err")
    }
  };
  const updateAdmission = async (req, res) => {
    const id = req.params.id;
    try {
      const updatedData = await admissionModel.findByIdAndUpdate(
        { _id: id },
        { ...req.body }
      );
      res.send({ msg: "admission  Details Succesfully Updated" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  };

  module.exports ={admit,getAdmissions,getSingleAdmission,updateAdmission}



  

