import ItemImage from "next/image";
import styled from "styled-components";

const Image = styled(ItemImage)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default Image;