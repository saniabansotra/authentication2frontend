import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [date, setdate] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  const handleregister = () => {
    try {
      const response = axios.post("/signup", {
        name: name,
        email: email,
        password: password,
        date: date,
        phonenumber: phonenumber,
      });
      if (response.data.success === "true") {
        toast.success("successfully registered");
        navigate("/login");
      }
    } catch (error) {}
  };
  return (
    <>
      <h1>signup</h1>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <br />
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
      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setdate(e.target.value);
        }}
      />
      <br />
      <label>phonenumber</label>
      <input
        type="number"
        value={phonenumber}
        onChange={(e) => {
          setphonenumber(e.target.value);
        }}
      />
      <br />
      <br />

      <button type="button" onClick={handleregister()}>
        Signup
      </button>
      <br />
      <br />
      <h3> Already Reagistered ???</h3>
      <span
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </span>
    </>
  );
};
export default Signup;
