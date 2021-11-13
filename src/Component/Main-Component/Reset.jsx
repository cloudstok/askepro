import _ from 'lodash';
import React from 'react';
import { Button, Grid, Checkbox, Form, Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import Updated from '../popup/updated';

const Reset = () => {
    const url = `${process.env.REACT_APP_BASE_URL}/forget/password`;

    const history = useHistory();
    const [rePassword, setConfirmPassword] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [otp, setOtp] = React.useState(null);
    const [pop, setPop] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState(false);
  

    const forgetPassword = async (event) => {
        try {
            event.preventDefault();
            let jsonPostData;
            if (Object.keys(localStorage).includes('email'))
                jsonPostData = {
                    'email': localStorage.getItem('email'),
                    'new_password': password,
                    'confirm_password': rePassword,
                    'otp': parseInt(otp)
                }
            if (Object.keys(localStorage).includes('phone'))
                jsonPostData = {
                    'phone': localStorage.getItem('phone'),
                    'new_password': password,
                    'confirm_password': rePassword,
                    'otp': parseInt(otp)
                }
            const res = await(await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonPostData)
            })).json();
           
            if (res.status == 1) {
                setMsg(res.msg);
                setOpen(true);
                localStorage.removeItem("email");
                localStorage.removeItem("phone");
                history.push('/login');
            }else{
                setMsg(res.msg);
                setPop(true);
            }
           
        } catch (error) {
            console.log(error)
        }
    };

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
                <Form className="loginx_form2" onSubmit={forgetPassword}>
                    <h3>Reset Your Password</h3>
                    <Form.Field>
                        <label>Password</label>
                        <input onChange={(event) => setPassword(event.target.value)} placeholder="Enter your new Password" />
                    </Form.Field>
                    <Form.Field>
                        <label>Re-Enter Password</label>
                        <input onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm your password" />
                    </Form.Field>
                    <Form.Field>
                        <label>OTP</label>
                        
                        <input onChange={(event) => setOtp(event.target.value)}/>
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
                    <h4>(OTP will be sent on your registered email ID)</h4>    

                    <button className="form-btn" type="submit">Submit</button>
                </Form>
            </div>
            <Updated wrong={true} open={pop} msg={msg} onClose={() => setPop(false)} />
            <Updated wrong={false} open={open} msg={msg} onClose={() => setOpen(false)} />
        </>
    );
}

export default Reset;