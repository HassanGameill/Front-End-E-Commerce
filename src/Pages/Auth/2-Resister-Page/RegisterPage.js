import './Register.css'

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div style={{ minHeight: "670px" }}>
      <Container style={{ minHeight: "600px" }}>
        <Row className="py-5 d-flex justify-content-center">
          <Col className="d-flex flex-column form-content">
            <label className="mx-auto title-login">Register</label>

            <input
              placeholder="Name ..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />

            <input
              placeholder="Email ..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />

            <input
              placeholder="password ..."
              type="password"
              className="user-input text-center mx-auto"
            />

            <button className="btn-login mx-auto mt-4">Register</button>

            <div className="mx-auto d-flex align-items-center gap-1">
              <label style={{ fontSize: "14px"}} className="mx-auto my-4">Do you have an account? </label>
              <Link className="text-link" to="/login">
                <span style={{ cursor: "pointer", fontSize: "15px"}} className="text-danger">
                  Input Here
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register
