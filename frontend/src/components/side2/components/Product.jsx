import { Col, Container, Row } from "react-bootstrap";

export default function Product() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src={""} alt="" />
          </Col>
          <Col>
            <div style={{ borderBottom: "1px solid black" }}>
              <h1>Play game</h1>
              <h2>$11,70</h2>
              <p>Available: In stock</p>
              <p>Hurry up! only 34 product left in stock!</p>
            </div>
            <div>
              <p>Color: green, black</p>
              <p>
                Size:<button>30</button>
                <button>56</button>
                <button>42</button>
                <button>48</button>
              </p>
              <p>
                Quantity:<button>-</button>
                <button>1</button>
                <button>+</button>
              </p>
              <div>
                <button>Add to cart</button>
                <button>Buy it now</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
