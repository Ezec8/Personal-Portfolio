const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const projectRoutes = require('./routes/projectRoutes')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//routes
app.use("/api/projects", projectRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT} and connected to DB`);
      });
  })
  .catch((error) => {
    console.log(error);
  });