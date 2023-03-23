import axios from "axios";
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOAST_CONFIG } from "../utils/configs";
import "./style.css";

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  

  const navigate = useNavigate();

  const submitSignup = () => {
    axios
      .post("http://localhost:8081/api/register", {
        name,
        email,
        password,
        repassword,
      })
      .then((res) => {
        if (res.status !== 200) {
          toast.error(res.data.message, TOAST_CONFIG);
        } else {
          toast.success(res.data.message, TOAST_CONFIG);
          setTimeout(() => {
            navigate("/signin");
          }, 1000);
        }
      })
      .catch((err) => {
        toast.error(err.message, TOAST_CONFIG);
      });
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 w-75 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-4">Sign up</h2>
                <div className="mb-3">
                  <Form onSubmit={(e) => {
                e.preventDefault();
                submitSignup();
              }}>
                    <Form.Group className="mb-4" controlId="Name">
                      <Form.Label className="text-center">Name*</Form.Label>
                      <Form.Control value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }} type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                      <Form.Label className="text-center">Email*</Form.Label>
                      <Form.Control value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Label>Password*</Form.Label>
                      <Form.Control value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }} type="password" placeholder="Password" />
                      <div className="mt-2 text-secondary">
                        Must be at least 8 characters.
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Label>Repassword*</Form.Label>
                      <Form.Control
                      value={repassword}
                      onChange={(e) => setRepassword(e.target.value)}
                        type="repassword"
                        placeholder="Repassword"
                      />
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
                        Create Account
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-5">
                    <p className="mb-0  text-center">
                      Already have an account??{" "}
                      <Link to={"/"}>
                      <a
                        href="{''}"
                        className=" fw-bold purple-text text-decoration-none"
                      >
                        Log in
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
