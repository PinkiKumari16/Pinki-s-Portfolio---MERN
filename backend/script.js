const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute");
// const updateInrtoRoute = require("./routes/updateInrtoRoute");
const path = require("path");

const port = process.env.PORT || 5000;
const _dirname = path.resolve();


app.use(express.json());
app.use("/api/portfoliodata", portfolioRoute);
// app.use("/adminPanel", updateInrtoRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (_, res)=>{
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});


app.listen(port, () => {
  console.log(`server is running port on ${port} .................`);
});
