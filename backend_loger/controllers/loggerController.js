const cors = require("cors");
const LoggerModel = require("../models/logger");
const Logger = require("../models/logger");

const showAll = async (req, res) => {
  try {
    const loggerRecords = await LoggerModel.find({});
    res.status(200).json({ loggerRecords });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addLogger = async (req, res) => {
  try {
    const { email, name, todo, comments } = req.body;
    const newLogger = new Logger({ email, name, todo, comments });
    const savedLogger = await newLogger.save();
    res.status(200).json(savedLogger);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


const deleteLogger = async (req, res) => {
  try {
    const id = req.params.id;
    const existLogger = await LoggerModel.findById(id);
    if (existLogger) {
      const deletedLogger = await LoggerModel.findByIdAndDelete(id);
      res.status(200).json({ message: "Successfully Deleted", deletedLogger });
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};







const editLogger=async(req,res) =>{
  try{
    const {id}=req.body;
    const existLogger=await LoggerModel.findById(id);
    if(existLogger){
      const updateLogger=await LoggerModel.findOneAndUpdate(id,req.body,{new:true})
      res.status
    }
  }catch{

  }
}



module.exports = {
  showAll,
  addLogger,
  deleteLogger,
  editLogger,
};
