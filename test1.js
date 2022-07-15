const express = require("express");
var cors = require("cors");
var mysql = require("mysql");
const app = express();
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "m_user",
  password: "123456",
  database: "user",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
