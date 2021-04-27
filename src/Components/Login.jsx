import React from "react";
import { Button, Checkbox, Form, Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Login1 = () => {
  const history = useHistory();
  
  const url = 'http://localhost:8000/login'
  const [name, setName] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [msg, setMsg] = React.useState(null);
  
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    
    console.log(event.target);
    
    const jsonPostData = {
      'name': name,
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
    if (data.status == 1 && data.token) {
      localStorage.setItem('token', data.token);
      history.push('/')
    } else{
      setMsg(data.msg);
    }
  };
  
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
      
      {msg && <Message negative>
                        <Message.Header>Error</Message.Header>
                        <p>{msg}</p>
                    </Message>
                    }
        <Form className="loginx_form" onSubmit={handleSubmitForm}>
            <h3>Login into your account</h3>
          <Form.Field>
            <label>Username</label>
            <input type="text" onChange = {(event) => setName(event.target.value)} name="name" placeholder="Enter username" required={true}/>
          </Form.Field>
          <Form.Field>
            <label> Password</label>
            <input type="password" onChange = {(event) => setPassword(event.target.value)} name="password" placeholder="Enter password" required={true}/>
          </Form.Field>
          <Form.Field className="check">
            <Checkbox label="I’m not a Robot" required={true} readOnly={false}/>
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
