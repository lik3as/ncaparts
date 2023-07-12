import { Dropdown as ItemDropdown } from "react-bootstrap";
import { styled } from "styled-components";

const Dropdown = styled(ItemDropdown)`
  .btn:hover {
    background-color: rgba(var(--color-orange-rgb), 1);
  }
`;

const DropdownToggle = styled(ItemDropdown.Toggle)`
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 3rem;
  color: white;

  background: -o-linear-gradient(left, var(--color-orange-hex),  rgba(0,0,0,0));
  background: linear-gradient(left, var(--color-orange-hex),  rgba(var(--color-orange-rgb), .5));
  background: -moz-linear-gradient(left, var(--color-orange-hex),  rgba(var(--color-orange-rgb), .5));
  background: -webkit-linear-gradient(left, var(--color-orange-hex),  rgba(var(--color-orange-rgb), .5));

  border: none;
  
`;


const DropdownMenu = styled(ItemDropdown.Menu)`

`;
const DropdownItem = styled(ItemDropdown.Item)`

`;

export { Dropdown, DropdownToggle, DropdownItem, DropdownMenu };