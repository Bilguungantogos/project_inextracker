const express = require("express");
require("dotenv").config();
const userRoute = require("./routes/userRoutes");

const PORT = process.env.PORT; //togtmoluudiig tomoor bichih
//Process environment variable

const app = express();

app.use(express.json);
app.get("api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is working at ${PORT}`);
});

app.use("api/user", userRoute);
