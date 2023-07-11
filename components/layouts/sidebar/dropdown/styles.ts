import { Dropdown as ItemDropdown, Image as ItemImage } from "react-bootstrap";
import { styled } from "styled-components";

const Dropdown = styled(ItemDropdown)`

`;

const DropdownToggle = styled(ItemDropdown.Toggle)`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 3rem;

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