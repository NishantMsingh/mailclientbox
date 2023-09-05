import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./Signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useRef } from 'react';
export default function Signup(props) {
 const inputEmail=useRef();
 const inputPass=useRef();
 const inputConfirmPass=useRef();

 const Signuphandler = async (e) => {
  e.preventDefault();
  props.showModal(true);
  let userLog = {
    email: inputEmail.current.value,
    password: inputPass.current.value,
  };
  let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEvvx-j1ijzhNqWJV6gG6NSIc9ywvp9D0"; // Replace with your Firebase API key
  if(inputPass.current.value===inputConfirmPass.current.value && inputPass.current.value !== "" && inputEmail.current.value.indexOf("@"))
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
          console.log("User ID creation successful:", data);

          alert("Id Created Successfully ! Go to Login section and do login");
        } else {
          const errorData = await response.json();
          console.log("Error creating user ID:", errorData);
        }
      } catch (error) {
        console.log("Error creating user ID:", error);
      }

      inputEmail.current.value = '';
      inputPass.current.value = '';
      inputConfirmPass.current.value = '';
     
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
      <Card className="p-4 Signup-bg">
        <h2 className="mb-4 text-center Signup-title">Sign up</h2>
        <Form className='Signup-form' onSubmit={Signuphandler}>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label className="text-left"> Email address</Form.Label>
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
        <span className='Signup-haveaccount Signup-font-weight' onClick={()=>{props.signup()}}> Have an Account / Log in</span>
      </Card>
      <ToastContainer />
    </div>

  );
}
