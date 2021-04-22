import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
const Login1 = () => {
  return (
    <>
      <div
        className="loginx"
        style={{
          background: "url(assets/images/login.png)",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <Form className="loginx_form">
            <h3>Login into your account</h3>
          <Form.Field>
            <label>Username</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label> Password</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field className="check">
            <Checkbox label="I’m not a Robot" />
          </Form.Field>
          <span class="fgt1">
             <a href="#">Forgot password?</a>
          </span>
          
          <button className="form-btn" type="submit">Submit</button>
          <span class="fgt2">
             <a href="#">New to Epro? Sign Up here</a>
          </span>
        </Form>
      </div>
    </>
  );
};

export default Login1;
