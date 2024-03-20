const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017";

const connectDB = async ()=>{
    try {
        await mongoose.connect(URL,{dbName: "blackCoffer"});
        console.log("Database Connection Success...");
    } catch (error) {
        console.log("Database Connection Failed...");
        process.exit(0);
    }
}

module.exports = connectDB;