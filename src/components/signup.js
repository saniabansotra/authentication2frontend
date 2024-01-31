import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "react-toastify/dist/components";
import axios from "axios";
const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [date, setdate] = useState("");
  const [phonenumber, setphonenumber] = useState("");
const navigate=useNavigate();
const handleregister=()=>{
    try{
    const response=axios.post("/signup",{
       name:name,
        email:email,
        password:password,
        date:date,
        phonenumber:phonenumber
        
    })
    if(response.data.success==="true"){
        toast.success("successfully registered");
    }
else{
    toast.warning(success.data.error);
}}
    catch(error){
       
    }

}
  return (
    <>
      <h1>signup</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <br/>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <br/>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <br/>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setdate(e.target.value);
        }}
      />
      <br/>
      <input
        type="number"
        value={phonenumber}
        onChange={(e) => {
          setphonenumber(e.target.value);
        }}
      />
      <br/>
      <br/>

     <button type="button" onClick={handleregister()}>Signup</button>
<br/>
<br/>
<h3> Already Reagistered ???</h3>
<button type="button" onClick={navigate="/login"}>Login</button>

      
    </>
  );
};
export default Signup;