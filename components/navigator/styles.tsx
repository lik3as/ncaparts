import styled from "styled-components";

import ItemWrapper from '../helpers/ItemWrapper';
import ItemText from '../helpers/ItemText';
import Image from 'next/image'

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'row'};
  align-items: ${(props) => props.$alignItems ?? 'center'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '15px 3rem'};
  max-width: ${(props) => props.$maxWidth ?? '100%'};
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
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  left: 0px;
  bottom: 0px;
  width: var(--nav-width);
  height: calc(100% - var(--header-height));
  background-color: (var(--bs-dark-rgb),var(--bs-bg-opacity)) !important;

`;

const Logo = styled(Image)`
  width: 180px;
  height: 75px;
  object-fit: "contain";
  margin: 8px;
  margin-left: 15px;
`

export { Wrapper, Text, NavWrapper, Logo };