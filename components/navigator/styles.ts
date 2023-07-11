import styled from "styled-components";

import ItemWrapper from '../helpers/ItemWrapper';
import ItemText from '../helpers/ItemText';
import { Dropdown as ItemDropdown, Image as ItemImage } from "react-bootstrap";

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'row'};
  align-items: ${(props) => props.$alignItems ?? 'center'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '15px 0px'};
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


const Image = styled(ItemImage)`
  width: 25px;
  object-fit: contain;
  margin-right: 10px;

  @media screen and (max-width: 768px){
    width: 20px;
  }
`;

const Dropdown = styled(ItemDropdown)`

`;

const DropdownToggle = styled(ItemDropdown.Toggle)`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 3rem;
  background: -o-linear-gradient(left, var(--color-green),  rgba(37,211,102,0));
  background: linear-gradient(left, var(--color-green),  rgba(37,211,102,0));
  background: -moz-linear-gradient(left, var(--color-green),  rgba(37,211,102,0));
  background: -webkit-linear-gradient(left, var(--color-green),  rgba(37,211,102,0));
  border: none;
`;


const DropdownMenu = styled(ItemDropdown.Menu)`
`;
const DropdownItem = styled(ItemDropdown.Item)`
`;

export { Wrapper, Text, NavWrapper, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Image };