import { Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Navbar from "react-bootstrap/Navbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function FooterNavbar() {
  return (
    <Navbar className="footerNav p-0 w-100">
      <Container className="h-100 w-100">
        <Row className=" h-100 w-100 d-flex justify-content-between">
          <Col xs={2} className="h-100 ">
            <Nav className="h-100">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Browse categories"
                className="w-100 h-100 s d-flex justify-content-end align-items-center p-3 "
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
          <Col xs={4} className=" d-flex">
            {["Home", "Catalog", "Blog", "Pages"].map((variant) => (
              <DropdownButton
                as={ButtonGroup}
                key={variant}
                id={`dropdown-variants-${variant}`}
                variant={variant.toLowerCase()}
                title={variant}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              </DropdownButton>
            ))}
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <a className="text-decoration-none" href="/">
              30 Days Free Return
            </a>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default FooterNavbar;
