import React, { useEffect, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserAuth } from "../../redux/slice/authuser";

const Login = () => {
  const [form, serForm] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    // Configuración de Axios para enviar cookies en las solicitudes
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        form,
        {
          withCredentials: true, // Enviar cookies en la solicitud
        }
      );
      navigate("/");
      dispatch(setUserAuth(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            similique assumenda quaerat non, porro voluptatibus explicabo
            accusantium vel blanditiis laborum exercitationem quis, nostrum
            commodi iusto obcaecati? Voluptatibus repellat velit fuga. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            maiores laudantium repellat quidem perspiciatis dicta velit, sed
            quos facilis. Quod accusamus beatae, deserunt perspiciatis iste in
            nisi voluptas! Asperiores, id.
          </p>
          <span>dont hace a count </span>
          <Link to="/register">
            <button>Register</button>{" "}
          </Link>
        </div>
        <div className="right">
          <h1>Login </h1>
          <form onSubmit={handelSubmit}>
            <input
              onChange={(e) => serForm({ ...form, username: e.target.value })}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => serForm({ ...form, password: e.target.value })}
              type="password"
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
