require("./config/config");

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const routesTask = require("./routes/task");


app.engine("html", require('ejs').renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api", routesTask);

//static files
app.use(express.static(path.join(__dirname, "dist")));

//start DB
mongoose.connect(process.env.urlDB, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("BD online");
    }
});

//start Server
app.listen(process.env.PORT, () => {
    console.log("servidor escuchando en puerto: " + process.env.PORT);
})