const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute");
// const updateInrtoRoute = require("./routes/updateInrtoRoute");

const port = process.env.PORT || 5000;

const path = require("path");
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build/index.html"));
  })
}

app.use(express.json());
app.use("/api/portfoliodata", portfolioRoute);
// app.use("/adminPanel", updateInrtoRoute);



app.listen(port, () => {
  console.log(`server is running port on ${port} .................`);
});
