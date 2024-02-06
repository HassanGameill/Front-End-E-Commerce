import BrandCard from "../BrandCard";


import { Container, Row } from "react-bootstrap";
import SubTitles from "../../Utilities/SubTitle/SubTitles";

import Image1 from '../../../Assets/Image/zara-brand.png'
import Image2 from '../../../Assets/Image/H&M-brand.png'
import Image3 from '../../../Assets/Image/Apple-brand.png'
import Image4 from '../../../Assets/Image/Samsung-brand.png'




function BrandFeature({title, btnTitle}) {
  return (
    <Container>
      <SubTitles title={title} btnTitle={btnTitle} />

      <Row className="my-2 d-flex justify-content F-between">
        <BrandCard Img={Image1}/>
        <BrandCard Img={Image2}/>
        <BrandCard Img={Image3}/>
        <BrandCard Img={Image4}/>
        <BrandCard Img={Image3}/>
        <BrandCard Img={Image2}/>

      </Row>
    </Container>
  );
}

export default BrandFeature;
