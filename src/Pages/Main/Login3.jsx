 import React from 'react';
import { Form } from 'semantic-ui-react';
 const Login30 = () => {
     return (
         <>
         <div
        className="loginx"
        style={{
          background: "url(Assets/images/login.png)",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
                  <Form className="loginx_form3">
            <h3>Forgot Password</h3>
          <Form.Field>
            <label>Username</label>
            <input placeholder="Enter registered mobile number/ email id" />
          </Form.Field>
         
    
          <button className="form-btn" type="submit">Submit</button>
          <span class="fgt2">
             <a href="#">New to Epro? Sign Up here  </a>
          </span>
        </Form>
      </div>

        

         </>
     );
 }
 export default Login30;
