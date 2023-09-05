import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router';


export default function Login(props) {
const navigate=useNavigate();
 const inputEmail=useRef();
 const inputPass=useRef();
 const [showPassword, setShowPassword] = useState(false);


 const Loginhandler = async (e) => {
  e.preventDefault();
  props.showModal(true);
  let userLog = {
    email: inputEmail.current.value,
    password: inputPass.current.value,
  };
  let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEvvx-j1ijzhNqWJV6gG6NSIc9ywvp9D0"; 
  if(inputPass.current.value !== "" && inputEmail.current.value.indexOf("@"))
    {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userLog),
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);
          localStorage.setItem("idToken",data.idToken);
          localStorage.setItem("email",data.email);
          toast.success("Logged in successfully");
          navigate("/Home");
        } else {
          const errorData = await response.json();
          console.log("Failed to login:", errorData);
        }
      } catch (error) {
        console.log("Failed to login:", error);
      }
      inputEmail.current.value = '';
      inputPass.current.value = '';
    }
    else
    {
      toast.error("Invalid Credential entetered");
      props.showModal(false);
    }
    props.showModal(false);
   
};

  return (
    <div>
      <Card className="p-4 Login-bg">
        <h2 className="mb-4 text-center Login-title">Log in</h2>
        <Form className='Login-form' onSubmit={Loginhandler}>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label className="text-left"> Email address</Form.Label>
            <Form.Control ref={inputEmail} type="email" placeholder="Enter email" className="form-control-custom Login-inputbg" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={inputPass}  type={showPassword ? "text" : "password"} placeholder="Password" className="form-control-custom Login-inputbg" />
          </Form.Group>
          <Form.Check
    className="Login-show-password"
    type="checkbox"
    label="Show Password"
    onChange={() => setShowPassword((prevShow) => !prevShow)}
  />
          <Button className='w-100 Login-font-weight' variant="primary" type="submit">
          Log in
          </Button>
        </Form>
        <span className='Login-haveaccount Login-font-weight' onClick={()=>{props.login()}}> Don't have an acccount / Sign up </span>
      </Card>
      <ToastContainer />  
    </div>
  );
}
