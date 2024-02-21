const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);
const app = express();
const {hanleUser} = require("./controllers/user")

//middleware
app.use(cors());
app.use(express.json());

//connect to database
mongoose
  .connect("mongodb://localhost:27017/practice_Db")
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

//routes
app.get("/profile/:username",hanleUser)



//server listening
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`server listing on port ${PORT}`);
});
