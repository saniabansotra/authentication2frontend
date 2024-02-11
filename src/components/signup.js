import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [isUnder18, setisUnder18] = useState("");
  const [age, setage] = useState("");

  const handleSignup = async () => {
    try {
      if (email.trim() === "") return toast.warning("Please enter your email");
      if (password.trim() === "")
        return toast.warning("Please enter your password");
      const response = await axios.post("signup", {
        name: name,
        email: email,
        password: password,
        phonenumber: phonenumber,
        isUnder18: isUnder18,
        age: age,
      });
      if (response.data.success) {
        toast.success("Successfully Registered");
      }
      navigate("/login");
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
      {" "}
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          placeholder="phone Number"
          value={phonenumber}
          onChange={(e) => {
            setphonenumber(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Is Under 18"
          value={isUnder18}
          onChange={(e) => {
            setisUnder18(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        <br />
        <button
          type="button"
          onClick={() => {
            handleSignup();
          }}
        >
          Signup
        </button>
        <h3> Already having Account??</h3>
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          Login Here
        </span>
      </form>
    </>
  );
};
export default Signup;
