import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isSentotp, setisSetotp] = useState(false);
  const [otp, setotp] = useState("");
  const handleLogin = async () => {
    try {
      if (email.trim() === "") return toast.warning("Please enter your email");
      if (password.trim() === "")
        return toast.warning("Please enter your password");
      const response = await axios.post("/login", {
        email: email,
        password: password,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setisSetotp(true);
      }
    } catch (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  };
  const handleOtpVerify = async () => {
    try {
      if (email.trim() === "") return toast.warning("Please enter your email");
      if (password.trim() === "")
        return toast.warning("Please enter your password");
      const response = await axios.post("/login", {
        email: email,
        password: password,
        code: otp,
      });
      if (response.data.success) {
        toast.success("Welcome to Famebook");
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  };
  return (
    <>
      <div>
        <h1>HELLO</h1>
      </div>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <br />
      <br />
      {isSentotp ? (
        <>
          <label>Enter Otp send on your number</label>
          <input
            type="number"
            value={otp}
            onChange={(e) => {
              setotp(e.target.value);
            }}
          />
        </>
      ) : (
        <> </>
      )}
      <br />
      <button
        type="button"
        onClick={() => {
          if (isSentotp) {
            handleOtpVerify();
          } else {
            handleLogin();
          }
        }}
      >
        Login
      </button>
      <h3> Not Registered??</h3>
      <span
        onClick={() => {
          navigate("/signup");
        }}
      >
        Signup Here
      </span>
    </>
  );
};
export default Login;
