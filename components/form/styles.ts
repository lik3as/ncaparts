import styled from 'styled-components';
import { Col as ItemCol, FormControl as ItemFormControl, FormGroup as ItemFormGroup } from 'react-bootstrap';

import ItemWrapper from '../helpers/ItemWrapper';
import ItemText from '../helpers/ItemText';

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'row'};
  align-items: ${(props) => props.$alignItems ?? 'center'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '20px 0px'};
  max-width: ${(props) => props.$maxWidth ?? '100%'};
  min-width: ${(props) => props.$minWidth ?? 'auto'};
  background-color: ${(props) => props.$backgroundColor ?? 'transparent'};

`;

const Text = styled(ItemText)`
  font-family: ${(props) => props.fontFamily ?? 'Arial, Helvetica, sans-serif'};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  font-size: ${(props) => props.fontSize ?? '1rem'};
  text-align: ${(props) => props.$textAlign ?? 'center'};
  color: ${(props) => props.color ?? 'white'};
  margin: 0;
  transition: all .3s ease;

  &.clickable:hover {
    color: white;
    cursor: pointer;
  }

  &.orange {
    color: var(--color-orange-hex);
  }
`;

const Col = styled(ItemCol)`
  width: 83.3%; //because InputLabel is with xs="2"
  
`;

const FormControl = styled(ItemFormControl)`
  &:focus {
    box-shadow: 0 0 1rem .28rem rgba(var(--color-orange-rgb), .6);
    border-color: rgba(var(--color-orange-rgb), .50);
  }
`;

const FormGroup = styled(ItemFormGroup)`
`;

export { Wrapper, Text, Col, FormControl, FormGroup };