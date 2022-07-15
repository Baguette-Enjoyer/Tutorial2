const express = require("express");
var cors = require("cors");
var mysql = require("mysql");
const app = express();
app.use(cors());

app.listen(4000, () => console.log("App listening on port 4000"));
var con = mysql.createConnection({
  host: "localhost",
  user: "m_user",
  password: "123456",
  database: "user",
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM userIn", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
// app.get("/home", (req, res) => {
//   var sql = "SELECT * FROM username";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     res.json(result);
//   });
// });
