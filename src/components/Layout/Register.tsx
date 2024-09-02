import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import "./layout.scss";
import visible from "../../assets/visible.png";
import profile from "../../assets/profile.png";
import invisible from "../../assets/invisible.png";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon.png";
import emailImg from "../../assets/email.png";
import phoneImg from "../../assets/call.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calender from "../../assets/calender.png";

const Register: React.FC = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDOB] = useState<Date | null>(null);
  const [gender, setGender] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-wrap">
      <div className="form">
        <div className="logos">
          <img src={icon} alt="logo-one" />
          <img src={logo} alt="main-logo" className="main-logo" />
          <img src={icon} alt="logo-two" />
        </div>
        <div className="login-wrap">
          <form>
            <h1>Register</h1>
            <div className="section-logo">
              <img src={icon} alt="icon" />
            </div>
            <InputField
              type="text"
              value={fullname}
              placeholder="Enter Your FullName"
              onChange={(e) => setFullName(e.target.value)}
            />
            <img src={profile} alt="men-img" className="register-img profile" />
            <InputField
              type="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <img
              src={emailImg}
              alt="email-img"
              className="register-img email"
            />
            <InputField
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPassword ? visible : invisible}
              alt="showpass"
              className="register-img pass"
              onClick={handleTogglePassword}
            />
            <InputField
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              placeholder="Enter Your Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <img
              src={showPassword ? visible : invisible}
              alt="showpass"
              className="register-img cpass"
              onClick={handleTogglePassword}
            />

            <DatePicker
              selected={dob}
              onChange={(date) => setDOB(date)}
              dateFormat="dd-MM-yyyy"
              placeholderText="dd-mm-yyyy"
              className="datepicker"
            />
            <img
              src={calender}
              alt="calender-img"
              className="register-img calender"
            />

            <div className="gender-selection">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>

            <InputField
              type="number"
              value={phone}
              placeholder="Enter Your PhoneNumber"
              onChange={(e) => setPhone(e.target.value)}
            />
            <img src={phoneImg} alt="call-img" className="register-img call" />

            <div className="cta-btn">
              <button type="submit">Submit</button>
            </div>
            <div className="register-link">
              <p>Have an account? </p>
              <Link to="/login" className="re-direct">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
