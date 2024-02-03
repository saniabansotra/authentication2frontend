import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "react-toastify/dist/components";
import axios from "axios";
const Login = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [isOptSent, setisOtpSent] = useState(false);
  const [otp, setotp] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
    try {
      const response = axios.post("/signup", {
        name: name,
        email: email,
        password: password,
      });
      if (response.data.success === "true") {
        toast.success("successfully registered");
      } else {
        toast.warning(success.data.error);
      }
    } catch (error) {}
  };
  return (
    <>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <br />
      {isOptSent ? (
        <>
          <div>
            <label>Enter Otp sent on Your phone Number</label>
            <input
              value={otp}
              onChange={(e) => setotp(e.target.value)}
              type="number"
            />
          </div>
        </>
      ) : (
        <></>
      )}

      <div>
        <button
          type="button"
          onClick={() => {
            if (isOptSent) {
              handleotpVerify();
            } else {
              handleLogin();
            }
          }}
        >
          Login
        </button>
      </div>
      <br />
      <br />
      <h3> New User ???</h3>
      <button type="button" onClick={(navigate = "/signup")}>
        Signup
      </button>
    </>
  );
};
export default Login;
