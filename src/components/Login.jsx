import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });

  return (
    <AuthLayout>
      <div className="login-box">
        <h1 className="logo">Instagram</h1>

        <input
          placeholder="Phone number, username, or email"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button className="login-btn">Log in</button>

        <div className="divider"><span>OR</span></div>
        <button className="fb-login">Log in with Facebook</button>
        <p className="forgot">Forgot password?</p>

        <p className="switch">
          Don&apos;t have an account?{" "}
          <span onClick={() => navigate("/signup")} style={{cursor:"pointer"}}className="fb-login">Sign up</span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
