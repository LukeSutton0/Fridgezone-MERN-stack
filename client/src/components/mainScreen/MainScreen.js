import React from "react";
import classes from './MainScreen.module.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

//add comments so we know whats going on with you initials
const SignUp = () =>{
  let navigate = useNavigate();
    return(
        <div className={classes.inputBox}>
          <Button variant="primary" onClick={()=> {
            navigate("/signUp");
            }}>
            SignUp</Button>
          <Button variant="secondary" onClick={()=> {
            navigate("/login");
            }}>
            Login</Button>
        </div>
    )
}

export default SignUp;