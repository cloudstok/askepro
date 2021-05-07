import _ from 'lodash';
import React from "react";
import { Button, Checkbox, Form, Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import {useFormik} from 'formik';
import * as Yup from 'yup';



const initialValues = {
    email:"",
    password:""
  };
  

const Username = () => {
    const history = useHistory();
    const url = `${process.env.REACT_APP_BASE_URL}/login`;

  const formik = useFormik({
    initialValues,
    validationSchema:Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
      .min(8, "Passwords must be at least 8 characters in length")
      .required('Required')
    }),




    onSubmit: async values => {
        alert(JSON.stringify(values, null, 2));

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    const data = await res.json();
    if (data.status == 1 && res.status == 200) {
        history.push('/login');

    }else{
        alert(data.msg);
    }
 },
});


  return (
    <>
      <div
        className="loginx"
        style={{
          background: "url(/Assets/images/login.png)",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >

        <Form className="loginx_form" onSubmit={formik.handleSubmit}>
          <h3>Login into your account</h3>
          <Form.Field>
            <label>Email</label>
            <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Enter your Email Address" />
              {formik.touched.email && formik.errors.email ? ( <div>{formik.errors.email}</div>) : null}
              
          </Form.Field>
          <Form.Field>
            <label> Password</label>
            <input type="password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Enter Password" />
              {formik.touched.password && formik.errors.password ? ( <div>{formik.errors.password}</div>) : null}
          </Form.Field>
      
          <span class="fgt1">
            <a href="javascript:void(0);" onClick={() => history.push('/fgpasswd')}>Forgot password?</a>
          </span>

          <button className="form-btn" type="submit">Submit</button>
          <span class="fgt2">
            <a href="javascript:void(0);" onClick={() => history.push('/register')}>New to Epro? Sign Up here</a>
          </span>
        </Form>
      </div>
    </>
  );
};

export default Username;