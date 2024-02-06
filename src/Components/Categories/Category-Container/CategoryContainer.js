import './CategoryContainer.css'

import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../Category-Card/CategoryCard'



import Images1 from '../../../Assets/Image/men.png'
import Images2 from '../../../Assets/Image/children.png'
import Images3 from '../../../Assets/Image/girls.png'

function CategoryContainer() {
  return (
    <Container>

        <Row className='my-2 d-flex justify-content-between'>
            <CategoryCard title="Men Clothes" Img={Images1} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images2} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images3} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images2} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images1} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images2} background="#FFF"/>

            <CategoryCard title="Men Clothes" Img={Images1} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images2} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images3} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images2} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images1} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images2} background="#FFF"/>

            <CategoryCard title="Men Clothes" Img={Images1} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images2} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images3} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images2} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images1} background="#FFF"/>
            <CategoryCard title="Men Clothes" Img={Images2} background="#FFF"/>

        </Row>
      
    </Container>
  )
}

export default CategoryContainer
