import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  return (
    <AuthLayout>
      <div className="login-box">
        <h1 className="logo">Instagram</h1>
        <p className="subtitle">
          Sign up to see photos and videos from your friends.
        </p>

        <input placeholder="Mobile Number or Email" />
        <input placeholder="Full Name" />
        <input placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Sign up</button>

        <p className="switch">
          Have an account?{" "}
          <span onClick={() => navigate("/")} style={{cursor:"pointer"}}className="fb-signup">Log in</span>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
