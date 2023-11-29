const express = require("express");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT; //togtmoluudiig tomoor bichih
//Process environment variable

const app = express();

//Authentication
app.use(express.json());
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is working at ${PORT}`);
});
