const express = require("express");
const app = express();
var cors = require("cors");
const courseRoute = require('./route/courseRoute')

const port =3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/course", courseRoute);
app.use("*", (req, res) => res.status(404).json({ error: "Page not found :))"}))

app.listen(port, () => {
    console.log("Server listen on port " + port + "...");
  });
  