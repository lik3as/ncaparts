import styled from "styled-components";
import { InputGroup as ItemInputGroup, Button as ItemButton, Image as ItemImage } from "react-bootstrap";

import ItemWrapper from '../helpers/ItemWrapper';
import ItemText from '../helpers/ItemText';
import NextImage from 'next/image'

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'row'};
  align-items: ${(props) => props.$alignItems ?? 'center'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '10px'};
  max-width: ${(props) => props.$maxWidth ?? '100%'};
  background-color: ${(props) => props.$backgroundColor ?? 'transparent'};
`;

const HeaderWrapper = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  height: var(--header-height);
  background-color: #000000;
  padding: 0 !important;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NextImage)`
  width: 165px;
  height: 65px;
  object-fit: "contain";
  margin: 8px;
  margin-left: 15px;

  @media screen and (max-width: 1024px){
    width: 100px;
    height: 50px;  
  }

  @media screen and (max-width: 768px){
    width: 60px;
    height: 30px;
  }
`

const InputGroup = styled(ItemInputGroup)`
  width: calc(50vw - 40px);

  @media screen and (max-width: 1024px){
    width: calc(55vw - 40px);
  }

  @media screen and (max-width: 768px){
    width: calc(60vw - 40px);
  }

  @media screen and (max-width: 480px){
    width: calc(65vw - 40px);
  }
`;

const Button = styled(ItemButton)`
  width: calc(14vw - 30px);
  text-align: center;
  padding: .1rem !important;
  background-color: #33393e;


  @media screen and (max-width: 1024px){
    width: calc(14vw - 25px);
  }

  @media screen and (max-width: 768px){
    width: calc(14vw - 15px);
  }

  @media screen and (max-width: 480px){
    width: calc(14vw - 5px);
  }
`;

const Image = styled(ItemImage)`
  width: 70px;
  object-fit: contain;

  @media screen and (max-width: 768px){
    width: 50px;
  }
`;

export { Wrapper, HeaderWrapper, Logo, InputGroup, Button, Image };