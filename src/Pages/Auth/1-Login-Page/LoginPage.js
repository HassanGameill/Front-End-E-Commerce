import { Col, Container, Row } from "react-bootstrap";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "600px" }}>
        <Row className="py-5 d-flex justify-content-center">
          <Col className="d-flex flex-column form-content">
            <label className="mx-auto title-login">Login Here</label>

            <input
              placeholder="Email..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />

            <input
              placeholder="password..."
              type="password"
              className="user-input text-center mx-auto"
            />

            <button className="btn-login mx-auto mt-4">Login</button>

            <div className="mx-auto d-flex align-items-center gap-1">
              <label style={{ fontSize: "14px"}} className="mx-auto my-4">Do You Want to Registration? </label>
              <Link className="text-link" to="/register">
                <span style={{ cursor: "pointer", fontSize: "15px"}} className="text-danger">
                  Input Here
                </span>
              </Link>
            </div>

{/*             
            <div className="d-flex flex-column py-5 px-5">
            <Link className="text-link">
                <span style={{ cursor: "pointer", fontSize: "15px"}}>Login With Admin Account</span>
              </Link>
              <Link className="text-link">
                <span style={{ cursor: "pointer", fontSize: "15px"}}>Login With User Account</span>
              </Link>
            </div> */}


          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
