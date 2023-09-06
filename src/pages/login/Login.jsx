import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            similique assumenda quaerat non, porro voluptatibus explicabo
            accusantium vel blanditiis laborum exercitationem quis, nostrum
            commodi iusto obcaecati? Voluptatibus repellat velit fuga.
          </p>
          <span>dont hace a count </span>
          <Link to="/register">
            <button>Register</button>{" "}
          </Link>
        </div>
        <div className="right">
          <h1>Login </h1>
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
