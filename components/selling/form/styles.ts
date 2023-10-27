import styled from "styled-components";
import { Button as ItemButton } from 'react-bootstrap'

import { Wrapper as ItemWrapper } from "../styles";

const Wrapper = styled(ItemWrapper)` 
  &.input-container {
    outline: #AAAAAA solid 1px;
    margin-top: 2px;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled(ItemButton)`
  width: 10rem;
`;

export { Wrapper, Form, Button }