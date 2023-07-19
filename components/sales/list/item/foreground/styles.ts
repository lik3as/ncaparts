import styled from "styled-components";
import { Image as ItemImage } from "react-bootstrap";

import { Wrapper as ItemWrapper } from "../../../styles";

const Wrapper = styled(ItemWrapper)`
  border: 6px solid transparent;
  border-radius: 6px;

  &.foreground {
    align-self: center;
    margin-bottom: 10px;
    padding: .5rem;
    width: 10rem;
  }

  @media screen and (max-width: 768px){
    &.foreground {
      max-width: 9rem;
    }
  }

  @media screen and (max-width: 480px){
    &.foreground {
      max-width: 7rem;
      padding: .3rem;
    }
  }
`;

const Image = styled(ItemImage)`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%; 
`;

export { Wrapper, Image }