import styled from "styled-components";
import { Image as ItemImage, Button as ItemButton } from "react-bootstrap";

const Button = styled(ItemButton)`
  margin: 10px 0;
  white-space: nowrap;
`;

import ItemText from '../../helpers/ItemText';

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
  padding: 1rem 2.5rem .5rem 2rem; 
  left: 0px;
  z-index: 1;
  height: 100%;
  background-color: #141414 !important;
  min-width: 19vw;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    position: fixed;
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
  margin-bottom: 20px;
  color: #AAAAAA;
  width: 90%;
`;

export { Text, NavWrapper, Image, Button, Divisor };