import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [form, serForm] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [userRegistred, setUserRegistred] = useState(null);
  console.log(error, 1212312312312312);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        form
      );
      setUserRegistred(response.data);
      alert(response.data);
    } catch (err) {
      console.error("Error de Axios:", err);
      if (err.response) {
        setError(err.response.data);
        alert(err.response.data);
      } else {
        console.error("Error de red u otro error:", err);
      }
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form onSubmit={handelSubmit}>
            <input
              required
              onChange={(e) => serForm({ ...form, username: e.target.value })}
              type="text"
              placeholder="Username"
            />
            <input
              onChange={(e) => serForm({ ...form, email: e.target.value })}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => serForm({ ...form, password: e.target.value })}
              type="password"
              placeholder="Password"
            />
            <input
              onChange={(e) => serForm({ ...form, name: e.target.value })}
              type="text"
              placeholder="Name"
            />
            <button type="submit">Register</button>
            <span>{(error && error) || (userRegistred && userRegistred)}</span>
          </form>
        </div>
        <div className="right">
          <h1>Asdaf social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            similique assumenda quaerat non, porro voluptatibus explicabo
            accusantium vel blanditiis laborum exercitationem quis, nostrum
            commodi iusto obcaecati? Voluptatibus repellat velit fuga.
          </p>
          <span>dont have a acount </span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
