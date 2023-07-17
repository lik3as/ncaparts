import styled from "styled-components";
import { Image as ItemImage, Button as ItemButton } from "react-bootstrap";

const Button = styled(ItemButton)`
  margin: 10px 0;
`;

import ItemWrapper from '../../helpers/ItemWrapper';
import ItemText from '../../helpers/ItemText';

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'row'};
  align-items: ${(props) => props.$alignItems ?? 'center'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '20px 0px'};
  max-width: ${(props) => props.$maxWidth ?? '100%'};
  min-width: ${(props) => props.$minWidth ?? 'auto'};
  background-color: ${(props) => props.$backgroundColor ?? 'transparent'};
`;

const Text = styled(ItemText)`
  font-family: ${(props) => props.fontFamily ?? 'Arial, Helvetica, sans-serif'};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  font-size: ${(props) => props.fontSize ?? '1rem'};
  text-align: ${(props) => props.$textAlign ?? 'center'};
  color: ${(props) => props.color ?? 'black'};
`;

const NavWrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1rem 0 3rem; 
  left: 0px;
  z-index: 1;
  height: calc(100% - var(--header-height));
  background-color: #141414 !important;
  min-width: 18vw;

  @media screen and (max-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 2rem;
    left: -180px;
  }

  @media screen and (max-width: 480px){
    min-width: 40vw; 
  }

  @media screen and (max-height: 670px) {
    overflow-y: scroll;
  }

  &.open {
    left: 0px;
  }
`;

const Image = styled(ItemImage)`
  width: 25px;
  object-fit: contain;
  margin-right: 10px;

  @media screen and (max-width: 768px){
    width: 20px;
  }
`;

const Divisor = styled.hr`
  align-self: center;
  margin-bottom: 20px;
  color: #AAAAAA;
  width: 100%;
`;

export { Wrapper, Text, NavWrapper, Image, Button, Divisor };