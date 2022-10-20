const express = require("express");
const app = express();
const cors = require("cors");
const configureDB = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

// handling cors
app.use(cors());
// configuring mongodb database
configureDB();
// json accepted
app.use(express.json({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("App Is Up");
});

app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`App is running ${PORT}`);
});
