import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { UserContext } from "../context/UserContext";
export default function Login() {
  //const {email,setEmail} = useContext(UserContext)
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [login, setLogin] = useState([]);
  let [Role, setRole] = useState({});

  let [profile, setProfile] = useState({});
  console.log("gooda", Role);

  //  var firstName = (profile.givenName);

  //  var lastName =( profile.familyName);
  //  var email = (profile.email);

  //  var password = (profile.googleId);
  //  console.log("profile",  firstName,password,email);
  var date = new Date().toDateString();
  var role = "user";

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 6 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 12 } },
  };
  const tailFormItemLayout = {
    wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
  };

  // define validation rules for the form fields
  const passwordRules = [
    { required: true, message: "Please input your password!" },
  ];

  const emailRules = [
    {
      required: true,
      message: "Please input your username!",
      whitespace: true,
    },
  ];

  console.log(`logging in user: ${email}`);
  let history = useHistory();
  const Redirect = () => {
    // submit()
    history.push("/home");
  };

  const redirect = () => {
    let role = "staff"
    if (role == "user") {
      history.push("/home");
    } else if (role == "staff") {
      history.push("/admin");
    } else {
      history.push("/");
    }
  };

  const Login = () => {
 
    fetch("http://localhost:4000/api/v1/users/login/",  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Authorization: "Basic " + btoa(email + ":" + password),
      },
    })
      .then((response) => response.json())
      .then((response) => setLogin(response));
    redirect();
  };

  

  // const submit = () => {
  // // console.log('name',firstName)

  //   fetch("http://localhost:4000/api/v1/users/adduser", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       // firstName,
  //       // lastName,
  //       // email,
  //       // password,
  //       date,
  //       role,
  //     }),
  //     headers: { "Content-Type": "application/json" },
  //   });
  // };

  const responseGoogle = (response) => {
    //console.log("2", response.profileObj);
    setProfile(response.profileObj);
  };

  return (
    <div className="Login">
      <Form
      // onSubmit={handleSubmit}
      >
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          onClick={() => {
            Login();
          }}
          // disabled={!validateForm()}
        >
          Login
        </Button>
        <br />
        <div className="Notuser">
          <Link to="/sign-up">
            <label>Not a User ! sign-Up</label>
          </Link>
        </div>
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
