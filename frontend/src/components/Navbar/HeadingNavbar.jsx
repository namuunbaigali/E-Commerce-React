
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Col, Row } from 'react-bootstrap';

function HeadingNavbar() {
  return (
    <Navbar className="headingNav  bg-white" expand="lg" >
      <Container className="container">
        <Row className="w-100 d-flex h-100 justify-content-between">
          <Col xs={5} className="d-flex">
            <p>Need help? Call us:(+98)0234 456 789</p>
          </Col>
            <Col xs={4}>
            </Col>
          
          <Col xs={3} className="d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              <i class="bi bi-geo-alt" style={{ fontSize: 25, color: "black", alignItems:"center", marginRight:20,marginLeft:20 }}></i>
              <a className="text-decoration-none text-black" href="/">Our store</a>
            </div>
            <div className="d-flex align-items-center">
            <i class="bi bi-truck" style={{ fontSize: 25, color: "black", alignItems:"center", marginRight:20,marginLeft:20 }}></i>
            <a className="text-decoration-none text-black" href="/">Cart</a>
            </div>
          </Col>

        </Row>
        
      </Container>
    </Navbar>
  );
}

export default HeadingNavbar;
