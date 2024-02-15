// const fetch = require("node-fetch");
const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.urlencoded({ extended: true }));

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set("view engine", "ejs");

//include public folder
app.use(express.static("public"));

app.get("/", async (req, res) => {
    res.render("home");
});

app.get("/success", async (req, res) => {
    res.render("success");
});

app.listen(8080, () => {
  console.log("server started");
});
