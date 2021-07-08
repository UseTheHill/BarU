const express = require("express");
//const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const app = express();
const config = require("./config/config");
const routes = require("./server/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/BarU_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => {
    console.log(err);
  });

// Define API routes

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(
    `🌎 ==> Express/Node.js API server now on http://localhost:${PORT}`
  );
});
