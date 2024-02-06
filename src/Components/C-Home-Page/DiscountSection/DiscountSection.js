import "./DiscountSection.css";
import { Col, Container, Row } from "react-bootstrap";


function DiscountSection({background, discountTitle, image, textColor, Image2}) {
  return (
    <Container>
      <Row style={{ backgroundColor: `${background}`}} className="discount-bg my-4 mx-2 d-flex text-center align-items-center">
        
        <Col sm="6">
          <div style={{ color: `${textColor}` }} className="discount-title">
             {discountTitle}
          </div>
        </Col>

        <Col sm="6">
            <img className="discount-img" src={image}  alt=""/>
        </Col>
        
      </Row>
    </Container>
  );
}

export default DiscountSection;
