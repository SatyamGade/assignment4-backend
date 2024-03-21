const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./utils/db");
const dashboard = require("./routes/dashboard")
const errorMiddleware = require("./middlewares/errorMiddleware");

const corsOptions = {
    origin: "https://assignment4-frontend.vercel.app/",
    methods: ["GET"],
    credentials: true
}

app.use(cors());
app.use(express.json());

app.use("/admin/dashboard", dashboard);

app.use(errorMiddleware);

const PORT = 5000;

connectDB().then(() =>{
    app.listen(PORT, ()=>{
        console.log(`Server is listening on ${PORT} PORT`);
    })
})