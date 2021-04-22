import _ from 'lodash';
import React from 'react';
import { Button, Grid, Checkbox, Form } from "semantic-ui-react";





const Login2 = () => {
    return(
    <>
        <div
        className="loginx"
        style={{
          background: "url(assets/images/login.png)",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Form className="loginx_form2">
            <h3>Create an Account</h3>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Enter your name" />
          </Form.Field>
          <Form.Field>
            <label>Mobile Number</label>
            <input placeholder="Enter your mobile number" />
          </Form.Field>
          <Form.Field>
            <label>Enter OTP</label>
          <div className="otp">
          
            <input style={{width:'70px'}}/>
            <input style={{width:'70px'}}/>
            <input style={{width:'70px'}}/>
            <input style={{width:'70px'}}/>
            <input style={{width:'70px'}}/>
            
          </div>
            
          </Form.Field>
        
          <span class="fgt1">
             <a href="#">Resend in 01:45</a>
          </span>
          
          <button className="form-btn" type="submit">Submit</button>
          <span class="fgt2">
             <a href="#">Already an existing customer? Login here</a>
          </span>
        </Form>
      </div>

    </>    
    );
}

export default Login2;