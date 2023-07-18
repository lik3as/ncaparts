import styled from "styled-components";

import ItemWrapper from '../helpers/ItemWrapper'
import ItemText from '../helpers/ItemText'

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'column'};
  align-items: ${(props) => props.$alignItems ?? 'flex-start'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '0'};
  max-width: ${(props) => props.$maxWidth ?? '100%'};
  min-width: ${(props) => props.$minWidth ?? 'auto'};
  background-color: ${(props) => props.$backgroundColor ?? 'transparent'};

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    display: inline-block;
    margin-right: 15px;
  }

  @media screen and (max-width: 768px){
    ul li {
      margin: 15px 15px 0 0;
    }
  }
`;

const Text = styled(ItemText)`
  font-family: ${(props) => props.fontFamily ?? 'Labrador B'};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  font-size: ${(props) => props.fontSize ?? '1rem'};
  font-style: ${(props) => props.fontStyle ?? 'normal'};
  text-align: ${(props) => props.$textAlign ?? 'center'};
  color: ${(props) => props.color ?? 'white'};

  :hover {
    color: white;
    cursor: pointer;
  }
`;

export { Wrapper, Text }