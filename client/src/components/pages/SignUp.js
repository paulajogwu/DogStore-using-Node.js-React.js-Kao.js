import React, { useState } from "react";
import "../../App.css";
import "./SignUp.css";
import { Link,useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { GoogleLogin } from "react-google-login";

export default function SignUp() {
  let [firstName, setFirstname] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let date = new Date();
  let role = "user";
  let [profile, setProfile] = useState([]);

  let [firstnameError, setFirstnameError] = useState({});
  let [lastnameError, setLastnameError] = useState({});
  let [emailError, setEmailError] = useState({});
  let [passwordError, setPasswordError] = useState({});


  const submit = () => {
    ///e.preventDefault();
    const isValid = validate();
    if (isValid) {
      fetch("http://localhost:4000/api/v1/users/adduser", {
        method: "POST",
        body: JSON.stringify({ firstName,lastName, email, password,date, role}),
        headers: { "Content-Type": "application/json" },
      });
    }
  };

  const validate = () => {
    const firstnameError = {};
    const lastnameError = {};
    const emailError = {};
    const passwordError = {};
    

    let isvalid = true;

    if (firstName == 0) {
      firstnameError.firstnameV = "First Name is Required";
      isvalid = false;
    } else if (lastName == 0) {
      lastnameError.lastnameV = "Last Name is Required";
      isvalid = false;
    }
     else if (email == 0) {
      emailError.emailV = "E-mail is Required";
      isvalid = false;
    } else if (password == 0) {
      passwordError.passwordV = "Password is Required";
      isvalid = false;
    }

    setFirstnameError(firstnameError);
    setLastnameError(lastnameError);
    setEmailError(emailError);
    setPasswordError(passwordError);
   

    return isvalid;
  };

  const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 6 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 12 } },
  };
  const tailFormItemLayout = {
    wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
  };

  let history = useHistory();
  const Redirect = () => {
    history.push("/home");
  };

  const responseGoogle = (response) => {
    //console.log("1", response.tokenObj);
    console.log("2", response.profileObj);

    setProfile(response.profileObj);
    
    Redirect();
   
  };

  return (
    <div className="Signup">
      <Form {...formItemLayout} name="register">
        <p
          style={{
            marginLeft: "100px",
            color: "blue",
            textTransform: "uppercase",
            fontSize: "40px",
          }}
        >
          {" "}
          Register
        </p>
        <Form.Item name="" label="First Name" {...tailFormItemLayout}>
          <Input
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            style={{ width: "360px", borderRadius: "0.5px" }}
          />
            {Object.keys(firstnameError).map((key) => {
            return <div style={{ color: "red" }}>{firstnameError[key]}</div>;
          })}
        </Form.Item>

        <Form.Item name="lastname" label="Last name">
          <Input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            style={{ width: "360px", borderRadius: "0.5px" }}
          />
            {Object.keys(lastnameError).map((key) => {
            return <div style={{ color: "red" }}>{lastnameError[key]}</div>;
          })}
        </Form.Item>
        <Form.Item name="email" label="E-mail" {...tailFormItemLayout}>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ width: "360px", borderRadius: "0.5px" }}
          />

          {Object.keys(emailError).map((key) => {
            return <div style={{ color: "red" }}>{emailError[key]}</div>;
          })}
        </Form.Item>

        <Form.Item name="password" label="Password" {...tailFormItemLayout}>
          <Input.Password
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ width: "360px" }}
          />
            {Object.keys(passwordError).map((key) => {
            return <div style={{ color: "red" }}>{passwordError[key]}</div>;
          })}
        </Form.Item>

     
        <br />
        <Form.Item>
          <Button
            type="secondary"
            onClick={() => {
              submit();
            }}
            htmlType="submit"
            style={{
              height: "40px",
              marginLeft: "120px",
              backgroundColor: "green",
              color: "white",
              width: "150px",
            }}
          >
            Register
          </Button>
        </Form.Item>
        <br />
        <div className="google">
        <GoogleLogin
            clientId="669710024779-ubjq3ja8urr46449b6nc2p5fbgehpdgg.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      </Form>
    </div>
  );
}
