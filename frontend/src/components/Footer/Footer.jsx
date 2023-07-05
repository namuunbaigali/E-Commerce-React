import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";
import { RiSendPlaneFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import head from "../Footer/icon/Vector.svg";
import logo from "../Footer/icon/logo-1.svg";
import footerJSON from "../Footer/json/footer.json";
import "../Footer/style.css";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className=" my-3 py-3 px-5 bg-white newsLetter d-flex align-items-center">
          <Col className="fw-bold col-4"> Subscribe newsletter</Col>
          <Col>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email address"
                className="bg-warning"
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                className="bg-warning"
              >
                <RiSendPlaneFill />
              </Button>
            </InputGroup>
          </Col>

          <Col className="text-primary d-flex">
            <Col className="col-3">
              <img src={head} alt="" />
            </Col>
            <Col className="col-9">Call us 24/7 : (+62) 0123 567 789</Col>
          </Col>
        </Row>

        <Row className="d-flexjustify-content-between ">
          <Row className="col-3">
            <img src={logo} alt="" className="pb-3" />
            <p>64 st james boulevard hoswick , ze2 7zj</p>
            <hr />
            <Row>
              <FcGoogle className="col-4" />
              <CiFacebook className="col-4" />
              <CiFacebook className="col-4" />
            </Row>
          </Row>

          <ul className="col-3">
            <h6> Find product</h6>
            {footerJSON.find.map((item) => {
              return (
                <li key={item.id}>
                  <a href="#">{item.name}</a>
                </li>
              );
            })}
          </ul>

          <ul className="col-3">
            <h6> Get help</h6>
            {footerJSON.get.map((item) => {
              return (
                <li key={item.id}>
                  <a href="#">{item.name}</a>
                </li>
              );
            })}
          </ul>

          <ul className="col-3">
            <h6>About us</h6>
            {footerJSON.about.map((item) => {
              return (
                <li key={item.id}>
                  <a href="#">{item.name}</a>
                </li>
              );
            })}
          </ul>
        </Row>
      </Container>
    </div>
  );
}
