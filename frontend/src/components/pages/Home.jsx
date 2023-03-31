import { Col, Container, Row } from "react-bootstrap";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import Pagination from "react-bootstrap/Pagination";
import "../pages/style.css";
import Product from "../side2/components/Product";
import Products from "./Products";

export default function Home() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
  const { currentUser } = useCurrentUser();
  return (
    <>
      <Container className="hei">
        <Row className="w-100">
          <Col className="w-100">
            <h1 className="heih">Canon camera</h1>

            <div>
              <button className="head-btn s">Shop now</button>
              <button className="head-btn a">View more</button>
            </div>
          </Col>
          <Col className="w-100">
            <img
              className="hei w-100"
              src="https://s3-alpha-sig.figma.com/img/21b0/fb29/3bce50594d1438d9a152038e14ee29b4?Expires=1681084800&Signature=KOeWrWaktvTMmPbkt7LukhDnpa~Mc1toMODlfHLzclPbWX7YMdxudKfSAZbS1AIxMKq81aftql6SK8UawA566qT1E-Z5YaDOt0keGCui5Ygb9HqQtPo2gDNuLRVx3TppMnfRZUcj25GhI~OcpLavJVVb0lJVXZ0uc9q4tqpnnvsXof7Q09UUp9OYu9Qm0EulZMHcmQ6FIRBPnTgMSdRoIHaWHciKPx-pFxdG-mE1c0M6i~iTDKZ205HusRZ0Fk7rYPq-FUYbE8Z1o3N~cNaCYomYWcO~pibru0gCtPqu3dLqmboZqpiX1l40iPYpmTG0eN7jSuWdQ3xZyti3OL1eQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </Col>
        </Row>
        <Products />
        <paginationBasic />
        {/* <Product /> */}
      </Container>
    </>
  );
}
