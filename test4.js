const express = require("express");
var cors = require("cors");
var mysql = require("mysql");
const app = express();
app.use(express.json());
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "m_user",
  password: "123456",
  database: "user",
});
app.listen(4000, () => console.log("App listening on port 4000"));
con.connect(function (err) {
  if (err) throw err;
  con.query(
    "INSERT INTO userin (ID,username,password,email) VALUES ('003','name3','123','klong232@gmail.com')",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
});
