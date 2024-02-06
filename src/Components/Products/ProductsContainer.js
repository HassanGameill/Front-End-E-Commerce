import { Container, Row } from "react-bootstrap";
import SubTitles from "../Utilities/SubTitle/SubTitles";
import ProductsCard from "./Products-Card/ProductsCard";


function ProductsContainer({title, btnTitle}) {
  return (
    <Container>
    <SubTitles title={title} btnTitle={btnTitle} />


    <Row className='my-2 d-flex justify-content-between'>
      
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        

    </Row>
  
</Container>
  )
}

export default ProductsContainer
