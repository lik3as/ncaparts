import styled from "styled-components";
import { Image as ItemImage, Button as ItemButton } from "react-bootstrap";

const Button = styled(ItemButton)`
  margin: 10px 0;
  white-space: nowrap;
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
    left: -200px;
  }

  &.open {
    left: 0px;
  }
`;

const Image = styled(ItemImage)`
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

export { NavWrapper, Image, Button, Divisor };