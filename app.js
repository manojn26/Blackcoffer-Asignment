const connectDb = require("./connectDb");
const dataModel = require("./model");
const express = require("express");
const cors = require("cors");

// getting json data from jsondata.json file
const jsondata = require("./saveJsonData");

// calling DB connection
connectDb();

// create instance for express
const app = express();
app.use(cors());
app.use(express.json());

// Insert JSON file data to MongoDB
const ImportData = async () => {
  try {
    await dataModel.create(jsondata);
    console.log("data imported succesfully");
  } catch (error) {
    console.log(error);
  }
};

// calling ImportData function
// ImportData(); --> DONT CALL THIS FUNCTION, I ALREADY IMPORTED DATA TO MONGODB ATLAS

// Sample get request
app.get("/", async (req, res) => {
  const apiData = await dataModel.find({});
  res.send(apiData);
});

// Starting Server
const port = 5000;

app.listen(port, () => {
  console.log(`Server Started and Running at PORT : ${port}`);
});
