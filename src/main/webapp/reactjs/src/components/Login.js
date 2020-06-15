
import React, { Component } from "react";
import axios from "axios";
import {Card,Form,Button,Col} from "react-bootstrap"
import MyToast from "./MyToast"


import {Link} from "react-router-dom"

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:8080/forms",
        {

            email: email,
            password: password

        },

      )
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
  const {email,password}=this.state;
    return (

    	<div>
    	<div style={{"display":this.state.show ? "block" : "none"}}>
    	 <MyToast children = {{show:this.state.show, message:"Login Successfull."}}/>
    	 </div>
    	 <Card className={"border border-dark bg-dark text-white"}>
         		<Card.Header>Login</Card.Header>
         		<Form onReset={this.resetBook} onSubmit={this.handleSubmit} id="bookFormId">

         		<Card.Body>
         		<Form.Row>
         		<Form.Group as= {Col} controlId="formGridfirstName">
         		<Form.Label>Email</Form.Label>
         		<Form.Control required autoComplete="off"
         		type="test"
         		name="email"
         		value={email}
         		onChange={this.handleChange}
         		className={"bg-dark text-white"}
         		placeholder="Enter Email" />

         		</Form.Group>

         		<Form.Group as= {Col} controlId="formGridlastName">
         		<Form.Label>Password</Form.Label>
         		<Form.Control required autoComplete="off"
         		type="test"
         		name="password"
         		value={password}
         		onChange={this.handleChange}
         		className={"bg-dark text-white"}
         		placeholder="Enter Password" />

         		</Form.Group>



         		</Form.Row>
         		<Card.Footer style={{"textAlign":"right"}}>
         		 <Link to={"Dashboard"} >
                     		<Button size="sm" variant="primary" type="submit">
                     		Login
                     		</Button>
                     		</Link>

                     		</Card.Footer>

                                 		</Card.Body>
                                 		</Form>
                              <center>   		<Link to="/add">Dont have an Account ? </Link></center>
                                 		</Card>

                            	</div>



);

}

}



/*import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import {Card,Form,Button,Col} from "react-bootstrap"

import { Error } from "../components/AuthForms";
import { useAuth } from "../context/auth";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();


  function postLogin() {
    axios.post("https://www.somePlace.com/auth/login", {
      email,
      password
    }).then(result => {
      if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Card className={"border border-dark bg-dark text-white"}>
         		<Card.Header>Login</Card.Header>

      <Form>
      <Card.Body>
           		<Form.Row>
           		<Form.Group as= {Col} controlId="formGridfirstName">
           		<Form.Label>FirstName</Form.Label>
           		<Form.Control required autoComplete="off"

          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          className={"bg-dark text-white"}
               		placeholder="Enter Email" />

          </Form.Group>

          <Form.Group as= {Col} controlId="formGridlastName">
               		<Form.Label>LastName</Form.Label>
               		<Form.Control required autoComplete="off"
               		type="password"
               		name="password"
               		value={password}
               		onChange={e => {
                                         setPassword(e.target.value);
                                       }}
               		className={"bg-dark text-white"}
               		placeholder="Enter Password" />

               		</Form.Group>
                       </Form.Row>

        <Card.Footer style={{"textAlign":"right"}}>
            		<Button size="sm" variant="primary" type="submit" onClick={postLogin}>Sign In</Button>
            		</Card.Footer>

                         		</Card.Body>
      </Form>
  <center>    <Link to="/add">Don't have an account?</Link> </center>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;
*/