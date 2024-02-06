import { Col } from 'react-bootstrap'
import './categoryCard.css'

function CategoryCard({background, Img, title}) {
  return (
    <Col
        xs="6"
        sm="6"
        md="4"
        lg="2"
        className='my-4 d-flex justify-content-around'
    >

        <div className='allCard mb-3'>
            <div
                className='category-card'
                style={{ backgroundColor: `${background}` }}
            >
            <img alt='Category Img' src={Img} className='category-card-img'/>
            </div>{""}
            <p className='category-card-text text-center my-2'>{title}</p>

        </div>
    </Col>
  )
}

export default CategoryCard
