const mongoose = require("mongoose");

const URL = "mongodb+srv://satyam:satya4426@cluster0.immfakx.mongodb.net/blackCoffer?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("Database Connection Success...");
    } catch (error) {
        console.log("Database Connection Failed...");
        process.exit(0);
    }
}

module.exports = connectDB;