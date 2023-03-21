import { Col, Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar from './Navbar';

function FooterNavbar() {
  return (
    <Navbar className="footerNav">

        <Container>
            <Row>
                <Col>
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                </Col>
            </Row>
        </Container>
    </Navbar>
  );
}

export default FooterNavbar;