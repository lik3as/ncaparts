import styled from "styled-components";

import ItemWrapper from '../helpers/ItemWrapper'
import ItemText from '../helpers/ItemText'

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
  font-family: ${(props) => props.fontFamily ?? 'Labrador B'};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  font-size: ${(props) => props.fontSize ?? '1rem'};
  font-style: ${(props) => props.fontStyle ?? 'normal'};
  text-align: ${(props) => props.$textAlign ?? 'center'};
  color: ${(props) => props.color ?? 'white'};
`;

const LandingWrapper = styled.div`
  display: flex;
  padding: 2rem;
  height: 40%;
  width: 100%;
`

export { Wrapper, Text, LandingWrapper }
