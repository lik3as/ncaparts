import { Dropdown as ItemDropdown, Image as ItemImage } from "react-bootstrap";
import { styled } from "styled-components";

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

const Image = styled(ItemImage)`
  width: 25px;
  object-fit: contain;
  margin-right: 10px;

  @media screen and (max-width: 768px){
    width: 20px;
  }
`;

export { Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Image };