import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import "./layout.scss";
import visible from "../../assets/visible.png";
import emailImg from "../../assets/email.png";
import invisible from "../../assets/invisible.png";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon.png";
import login from "../../assets/login.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-wrap">
      <div className="form">
        <div className="logos">
          <img src={icon} alt="logo-one" />
          <img src={logo} alt="main-logo" className='main-logo'/>
          <img src={icon} alt="logo-two" />
        </div>
        <div className="login-wrap">
          <form>
            <h1>Login</h1>
            <div className="login-user-wrap">
              <div className="login-user">
                <img src={login} alt='login-user' />
              </div>
            </div>
            <div className="section-logo">
                <img src={icon} alt="icon" />
            </div>
            <InputField
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <img src={emailImg} alt="email-img" className="login-img email" />

            <InputField
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPassword ? visible : invisible}
              alt="showpass"
              className="login-img pass"
              onClick={handleTogglePassword}
            />

            <div className="forgot-pass">Forgot Password</div>

            <div className="cta-btn">
              <button type="submit">Submit</button>
            </div>

            <div className="register-link">
              <p>Don`t have an account? </p>
              <Link to="/register" className="re-direct">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
