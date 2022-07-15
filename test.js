import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "http://localhost:4000/home";

const Test = () => {
  const [users, setUsers] = useState([]);
  axios.get(url).then((res) => setUsers(res.data));
  return users.map((user) => {
    const { ID, username, password, email } = user;
    return (
      <li key={ID}>
        <h4>{username}</h4>
        <h4>{email}</h4>
      </li>
    );
  });
};

export default Test;
