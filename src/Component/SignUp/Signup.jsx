import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./Signup.css"

import { useRef } from 'react';


export default function Signup() {

 const inputEmail=useRef();
 const inputPass=useRef();
 const inputConfirmPass=useRef();

 const Signuphandler = async (e) => {
  e.preventDefault();

  let userLog = {
    email: inputEmail.current.value,
    password: inputPass.current.value,
  };

  let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6ZQMh65aLPwZf_JsFpG8DjReEVoI_ndQ"; // Replace with your Firebase API key

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
      console.log("User ID creation successful:", data);
      // Perform any additional actions after successful user ID creation.
    } else {
      const errorData = await response.json();
      console.log("Error creating user ID:", errorData);
      // Handle the error response from the API.
    }
  } catch (error) {
    alert("Error:", error);
  }

  inputEmail.current.value = '';
  inputPass.current.value = '';
  inputConfirmPass.current.value = '';
};



  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '100vh' }}>
      <Card className="p-4 Signup-bg">
        <h2 className="mb-4 text-center Signup-title">Sign up</h2>
        <Form className='Signup-form' onSubmit={Signuphandler}>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label className="text-left">Email address</Form.Label>
            <Form.Control ref={inputEmail} type="email" placeholder="Enter email" className="form-control-custom Signup-inputbg" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={inputPass} type="password" placeholder="Password" className="form-control-custom Signup-inputbg" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control ref={inputConfirmPass} type="password" placeholder=" Confirm Password" className="form-control-custom Signup-inputbg" />
          </Form.Group>

          <Button className='w-100 Signup-font-weight' variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <span className='Signup-haveaccount Signup-font-weight'> Have an Account / Log in</span>
      </Card>
  
    </div>
  );
}
