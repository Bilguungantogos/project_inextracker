const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const PORT = process.env.PORT; //togtmoluudiig tomoor bichih
//Process environment variable

const app = express();

//Authentication
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/image", express.static(path.join(__dirname, "images/")));

app.use("/auth", authRoutes);
app.use("/users/", userRoutes);
app.use("/categories/", categoryRoutes);
app.use("/transactions/", transactionRoutes);
app.use("/api/image", imageRoutes);

app.listen(PORT, () => {
  console.log(`Server is working at ${PORT}`);
});
