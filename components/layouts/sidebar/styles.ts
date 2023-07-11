import styled from "styled-components";

import ItemWrapper from '../../helpers/ItemWrapper';
import ItemText from '../../helpers/ItemText';

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'row'};
  align-items: ${(props) => props.$alignItems ?? 'center'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '20px 0px'};
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
  padding: 3rem 0 0 3rem; 
  left: 0px;
  bottom: 0px;
  width: var(--nav-width);
  height: calc(100% - var(--header-height));
  background-color: (var(--bs-dark-rgb),var(--bs-bg-opacity)) !important;

`;


export { Wrapper, Text, NavWrapper };