import styled from "styled-components";
import { Image as ItemImage } from "react-bootstrap";

import { Wrapper as ItemWrapper } from "../../../styles";

const Wrapper = styled(ItemWrapper)`
  align-items: center;
  border: 6px solid transparent;
  border-radius: 6px;

  &.foreground-container {
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    margin-bottom: 10px;
    padding: .5rem;
    width: 10rem;
    height: 10rem;
  }

  @media screen and (max-width: 768px){
    &.foreground-container {
      width: 12rem;
      height: 12rem;
    }
  }

  @media screen and (max-width: 480px){
    &.foreground-container {
      padding: 0;
      width: 8.5rem;
      height: 8.5rem;
    }
  }
`;

const Image = styled(ItemImage)`
  object-fit: contain;
  object-position: center;
  max-width: 100%;
  max-height: 100%; 
`;

export { Wrapper, Image }