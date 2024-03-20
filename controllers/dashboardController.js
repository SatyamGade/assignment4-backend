const Data = require("../models/data");

const getData = async (req, res, next)=>{
    try {
        const data = await Data.find({});
        return res.status(200).json(data);
    } catch (error) {
        next({message: "error in controller(getData)", status: "400"});
    }
}

module.exports = {getData};