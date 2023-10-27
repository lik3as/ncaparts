import ItemImage from "next/image";
import styled from "styled-components";

const Image = styled(ItemImage)`
  object-fit: contain;
  @media screen and (width <= 700px){
    width: 50%;
  }
`;

export default Image;