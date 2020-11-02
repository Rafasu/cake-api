const express = require("express");
const cors = require("cors");
const mongoose =  require("mongoose");
require("dotenv/config");
const app = express();


//Config
const cakesRouter = require("./routes/cakes");
app.set("PORT", process.env.PORT || 4000);

//Connection to DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true} ,() =>{
    console.log("Connected to DB");
});

//Middleware
app.use(cors());
app.use(express.json());
app.use("/cakes", cakesRouter);


//Routes
app.get('/', (req, res) => {
    res.status(200).send("This is home");
});

//Server
app.listen(app.get("PORT"), () =>{
    console.log("Server Listenning on port:", app.get("PORT"));
});