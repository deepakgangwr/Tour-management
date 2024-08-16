import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // const [credentials, setCredentials] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setCredentials((prevCredentials) => ({
  //     ...prevCredentials,
  //     [id]: value,
  //   }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   // Handle login logic here
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                {/* Remove error and success messages */}
                {/* {error && <div className="alert alert-danger">{error}</div>} */}
                {/* {success && <div className="alert alert-success">{success}</div>} */}
                <Form>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      autoComplete="true"
                      id="email"
                      // onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <div className="password__input">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        required
                        autoComplete="true"
                        id="password"
                        // onChange={handleChange}
                      />
                      <i
                        className={`ri-eye-line${showPassword ? "-slash" : ""}`}
                        onClick={togglePasswordVisibility}
                      ></i>
                    </div>
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                    // onClick={handleClick}
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
