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
    width: 9rem;
    height: 9rem;
  }

  @media screen and (max-width: 768px){
    &.foreground-container {
      max-width: 9rem;
    }
  }

  @media screen and (max-width: 480px){
    &.foreground-container {
      max-width: 7rem;
      padding: 0;
      width: 5.5rem;
      height: 5.5rem;
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