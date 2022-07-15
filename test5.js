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
  con.query("SELECT * FROM userin", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

app.post("/register", (req, res) => {
  const id = new Date().getTime().toString();
  const username = req.body.data.username;
  const password = req.body.data.password;
  const email = req.body.data.email;

  con.query(
    "INSERT INTO userin (ID,username,password,email) VALUES (?,?,?,?) ",
    [id, username, password, email],
    (err, result) => {
      console.log(err);
      console.log(id, username, password, email);
    }
  );
});
