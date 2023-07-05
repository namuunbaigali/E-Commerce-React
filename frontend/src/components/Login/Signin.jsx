import axios from "axios";
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCurrentUser } from "../../hooks/useCurrentUser";

import { TOAST_CONFIG } from "../utils/configs";
import "./style.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setCurrentUser } = useCurrentUser();

  const submitSingIn = () => {
    axios
      .post("http://localhost:8081/api/login", { email, password })
      .then((res) => {
        if (res.status !== 200) {
          toast.error(res.data.message, TOAST_CONFIG);
        } else {
          toast.success(res.data.message, TOAST_CONFIG);
          const { user, token } = res.data.body;
          localStorage.setItem("token", token);
          localStorage.setItem("currentUser", JSON.stringify(user));
          setCurrentUser(user);
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 w-75 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-4">Sign in</h2>
                <div className="mb-3">
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      submitSingIn();
                    }}
                  >
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label className="text-center">Email*</Form.Label>
                      <Form.Control
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Label>Password*</Form.Label>
                      <Form.Control
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        placeholder="Password"
                      />
                      <div className="mt-2 text-secondary">
                        Must be at least 8 characters.
                      </div>
                    </Form.Group>

                    <Form.Group
                      className="mb-5"
                      controlId="formBasicCheckbox"
                    ></Form.Group>
                    <div className="d-grid">
                      <Button
                        className="p-3 purple rounded-3"
                        variant="secondary"
                        type="submit"
                      >
                        Log in
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-5">
                    <p className="mb-0  text-center">
                      Create your e-commerce account?{" "}
                      <Link to={"/signup"}>
                        <a
                          href="{''}"
                          className=" fw-bold purple-text text-decoration-none"
                        >
                          Create
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
