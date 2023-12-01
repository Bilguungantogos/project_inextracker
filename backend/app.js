const express = require("express");
require("dotenv").config();
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");

const PORT = process.env.PORT; //togtmoluudiig tomoor bichih
//Process environment variable

const app = express();

//Authentication
app.use(express.json());
app.use("/image", express.static(path.join(__dirname, "images/")));
app.use("/auth", authRoutes);
app.use("/api/image", imageRoutes);

app.listen(PORT, () => {
  console.log(`Server is working at ${PORT}`);
});
