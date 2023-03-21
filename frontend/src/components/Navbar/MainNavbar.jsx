import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Col, Image, Row } from 'react-bootstrap';
import "./style.css"

function MainNavbar() {
  return (
    <Navbar className="navbar mx-auto w-100" expand="lg">
      <Container className="container h-100 p-2">
        <Row className="w-100 h-100">
          <Col xs={2} className="d-flex justify-content-center align-items-center">
          <Image className="h-50" src="https://raw.githubusercontent.com/Baljinnyam07/E-Commerce-React/60ff655f61170330f5fefb71889bb602b30a3e94/frontend/src/image/logo%201.png" alt="Description"  height="auto"  />
          </Col>

          <Col xs={6} className="d-flex justify-content-center align-items-center ">
            <Form className="formOne flex-row-reverse align-items-center h-100 w-100">
              <Form.Control
                className="formTwo rounded-4 h-75 w-100"
                type="search"
                placeholder="Search any things"
                aria-label="Search"
              />
              <Button className="btns position-absolute rounded-4 h-75 w-25" variant="warning">Search</Button>
            </Form>
          </Col>

          
          <Col xs={4} className="d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              <i class="bi bi-person "style={{ fontSize: 25, color: "white", alignItems:"center", marginRight:15,marginLeft:15 }}></i>
              <a className="text-decoration-none text-white" href="/">Sign in</a>
            </div>
            <div className="d-flex align-items-center">
              <i class="bi bi-heart" style={{ fontSize: 25, color: "white", alignItems:"center", marginRight:15,marginLeft:15 }}></i>
              <a className="text-decoration-none text-white" href="/">Sign in</a>
            </div>
            <div className="d-flex align-items-center">
            <i class="bi bi-cart3" style={{ fontSize: 25, color: "white", alignItems:"center", marginRight:15,marginLeft:15 }}></i>
            <a className="text-decoration-none text-white" href="/">Cart</a>
            </div>
          </Col>

        </Row>
        
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
