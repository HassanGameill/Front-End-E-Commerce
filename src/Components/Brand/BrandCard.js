import './BrandCard.css'
import { Card, Col } from 'react-bootstrap'

function BrandCard({Img}) {
  return (
    <Col
        xs="6"
        sm="6"
        md="4"
        lg="2"
        className='my-2 d-flex justify-content-center'
    >
        <Card
          className='brand-card container d-flex justify-content-center align-items-center'
          style={{
            width: '100%',
            height: '151px',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            background: '#FFF',
          }}
        >
          <Card.Img  style={{ width: "100%", height: "100px" }} src={Img} />
        </Card>
    </Col>
  )
}

export default BrandCard;
