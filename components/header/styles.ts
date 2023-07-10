import styled from "styled-components";
import { InputGroup as ItemInputGroup, Form as ItemForm } from "react-bootstrap";

import ItemWrapper from '../helpers/ItemWrapper';
import ItemText from '../helpers/ItemText';
import Image from 'next/image'

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'row'};
  align-items: ${(props) => props.$alignItems ?? 'center'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '10px'};
  max-width: ${(props) => props.$maxWidth ?? '100%'};
  background-color: ${(props) => props.$backgroundColor ?? 'transparent'};
`;

const Text = styled(ItemText)`
  font-family: ${(props) => props.fontFamily ?? 'Arial, Helvetica, sans-serif'};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  font-size: ${(props) => props.fontSize ?? '1rem'};
  text-align: ${(props) => props.textAlign ?? 'center'};
  color: ${(props) => props.color ?? 'black'};
`;

const HeaderWrapper = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  height: var(--header-height);
  background-color: #000000;
`;

const Logo = styled(Image)`
  width: 180px;
  height: 75px;
  object-fit: "contain";
  margin: 8px;
  margin-left: 15px;

  @media screen and (max-width: 720px){
    width: 100px;
    height: 50px;  
  }
`

export { Wrapper, Text, HeaderWrapper, Logo };