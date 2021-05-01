import _ from 'lodash';
import React from 'react';
import { Button, Grid, Checkbox, Form, Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Login2 = () => {
  const url = `${process.env.REACT_APP_BASE_URL}/create`;

    const history = useHistory();
    const [name, setName] = React.useState(null);
    const [phone, setPhone] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const doUserCreate = async (event) => {
      event.preventDefault();

      const jsonPostData = {
        'name': name,
        'phone': parseInt(phone),
        'email': email,
        'password': password
      }

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonPostData)
      });

      const data = await res.json();

      if (data.status == 1 && res.status == 200) {
        history.push('/login');
      }

    };

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
          <Form className="loginx_form2" onSubmit={doUserCreate}>
            <h3>Create an Account</h3>
            <Form.Field>
              <label>Name</label>
              <input onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
            </Form.Field>
            <Form.Field>
              <label>Mobile Number</label>
              <input onChange={(event) => setPhone(event.target.value)} placeholder="Enter your mobile number" />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input onChange={(event) => setEmail(event.target.value)} placeholder="Enter your Email Address" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Enter Password" />
            </Form.Field>
            {/*
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
          */}
            <button className="form-btn" type="submit">Submit</button>
            <span class="fgt2">
              <a href="javascript:void(0);" onClick={() => history.push('/login')}>Already an existing customer? Login here</a>
            </span>
          </Form>
        </div>

      </>
    );
  }

export default Login2;