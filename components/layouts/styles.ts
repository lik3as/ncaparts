import styled from 'styled-components';

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

  &.dashboard {
    margin-top: auto;

    @media screen and (max-width: 768px){
      margin-bottom: 14vh;
    }
  }

  &.canvas-container {
    background-color: white;
    width: 50vw;
    height: 100vh;

    @media screen and (max-width: 768px){
      position: fixed;
      z-index: 0;
      background-color: #141414;
      width: 100vh;
      pointer-events: none;
    }
  }

  &.form-container {
    width: 50vw;
    height: 100vh;
    color: white;
    overflow-x: hidden;

    @media screen and (max-width: 768px){
      width: 100vw;
    }
  }
`;


const Text = styled(ItemText)`
  font-family: ${(props) => props.fontFamily ?? 'Arial, Helvetica, sans-serif'};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  font-size: ${(props) => props.fontSize ?? '1rem'};
  text-align: ${(props) => props.$textAlign ?? 'center'};
  color: ${(props) => props.color ?? 'black'};
`;

export { Wrapper, Text };