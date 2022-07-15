import { getAllByPlaceholderText } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const LogIn = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [input, setInput] = useState(true);

  const Submit = (e) => {
    e.preventDefault();

    if (usernameReg && passwordReg && emailReg) {
      if (input) {
        axios
          .post(
            "http://localhost:4000/register",

            {
              data: {
                username: usernameReg,
                password: passwordReg,
                email: emailReg,
              },
            },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((err) => console.log(err));
        console.log(usernameReg, passwordReg, emailReg);
        setUsernameReg("");
        setPasswordReg("");
        setEmailReg("");
      } else {
        setPasswordReg("");
      }
    }
  };
  return (
    <>
      <article>
        <form className="form" onClick={Submit}>
          <div className="form-control">
            <label htmlFor="usernameReg">username: </label>
            <input
              type="text"
              id="usernameReg"
              name="usernameReg"
              value={usernameReg}
              onChange={(e) => setUsernameReg(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="passwordReg">password: </label>
            <input
              type="text"
              id="passwordReg"
              name="passwordReg"
              value={passwordReg}
              onChange={(e) => setPasswordReg(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="emailReg">Email: </label>
            <input
              type="text"
              id="emailReg"
              name="emailReg"
              value={emailReg}
              onChange={(e) => setEmailReg(e.target.value)}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {/* {users.map((user) => {
          const { username, password, id } = user;
          return (
            <li key={id} className="item">
              <h4>username: {username}</h4>
              <h4>password: {password}</h4>
            </li>
          );
        })} */}
      </article>
    </>
  );
};

export default LogIn;
