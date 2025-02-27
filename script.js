const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute");
// const updateInrtoRoute = require("./routes/updateInrtoRoute");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/portfoliodata", portfolioRoute);
// app.use("/adminPanel", updateInrtoRoute);



app.listen(port, () => {
  console.log(`server is running port on ${port} .................`);
});
