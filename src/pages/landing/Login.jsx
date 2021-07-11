import React, { useContext, createContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Corosel from "../../components/Corosel";
import {useAuth, ProvideAuth} from  "../../common/login"

import { Row, Col, Card, Button, Form } from "react-bootstrap";

import "./Login.css";

function Login() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="log-section">
        <div className="log-container">
          <Card className="login-primary">
            <Card.Body id="login-card">
              <Row id="login-card">
                <Col id="login-left">
                  <Corosel />
                </Col>
                <Col id="login-right">
                  <h1 className="login-headline light">Masuk</h1>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <p className="lupa-password">
                      <a href="http://">Lupa Password?</a>
                    </p>
                    <Button
                      variant="primary"
                      className="btn-log log-primary"
                      type="submit"
                      onClick = {login}
                    >
                      Masuk
                    </Button>
                    <p className="login-breaker">Daftarkan UMKM Anda</p>
                    <Button
                      variant="secondary"
                      className="btn-log log-secondary"
                      href="/register"
                    >
                      Daftar
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* <div className="box">
                <div className="col">
                    <img src="images/poster_1.jpg" alt="" className="image"/>
                </div>
                <div className="col">
                    <div className="login">
                        <h1 className="title">Masuk</h1>
                        <form className="form" >
                            <div className="form-box">
                                <input type="text" name="username" className="input" placeholder="Username" />
                            </div>
                            <div className="form-box">
                                <input type="password" name="password" className="input" placeholder="Password" />
                            </div>
                            <div className="form-box">
                                <Link to='/sign-up'>
                                    <p className="forgot" >Lupa Password ?</p> 
                                </Link>
                            </div>
                            <div className="form-box">
                                <input type="submit" value="Masuk" className="button"/>
                            </div>
                            <div className="form-box">
                                <input type="submit" value="Daftar" className="button-secondary"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
    </div>
  );
}

export default Login;
