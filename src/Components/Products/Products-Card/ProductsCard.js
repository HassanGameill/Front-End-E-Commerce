import { Card, Col } from 'react-bootstrap';
import './ProductsCard.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import image1 from '../../../Assets/Image/children.png'



function ProductsCard() {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className='d-flex'>
        <Card
            className='my-2 container'
            style={{
                width: "100%",
                height: "390px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#FFF",
                boxShadow: "0 2px 2px rgba(151, 151, 151, 0.5) ",
            }}>

            <Card.Img  style={{ height: "228px", width: "100%", marginTop: "10px"}} src={image1} />
            <div className='d- flex justify-content-end mx-2 mt-2'>
                <FavoriteBorderIcon  
                        className='icon'
                        style={{
                            height: "24px",
                            width: "26px",
                        }}/>
            </div>

            <Card.Body>
                <Card.Title>
                    <div className='card-title'>
                        Smart Hand Watch color Black
                    </div>
                </Card.Title>
                <Card.Text>
                    
                    <div className='d-flex justify-content-between '>

                        <div className='d-flex'>
                            <div className='card-price'>Dollar 80</div>
                            <div className='card-currency mx-1'></div>

                        </div>

                        <div className='d-flex'>
                            <div className='card-rate mx-2'>4.5</div>

                            <StarBorderIcon 
                                className='icon'
                                height= "16px"
                                width= "16px"
                            />
                        </div>

                        
                    </div>
                </Card.Text>
            </Card.Body>

        </Card>
    </Col>
  )
}

export default ProductsCard
