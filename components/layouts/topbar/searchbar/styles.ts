import { styled } from 'styled-components';

import {
  InputGroup as ItemInputGroup,
  Button as ItemButton,
  FormControl as ItemFormControl
} from 'react-bootstrap'

const InputGroup = styled(ItemInputGroup)`
  width: calc(50vw - 40px);

  @media screen and (max-width: 1024px){
    width: calc(55vw - 40px);
  }

  @media screen and (max-width: 768px){
    width: calc(56vw - 40px);
  }

  @media screen and (max-width: 480px){
    width: calc(58vw - 40px);
  }
`;

const Button = styled(ItemButton)`
  width: calc(14vw - 30px);
  text-align: center;
  padding: .3rem !important;
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

const FormControl = styled(ItemFormControl)`
  text-align: left;
`;

export { Button, InputGroup, FormControl }