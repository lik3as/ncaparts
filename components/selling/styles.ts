"use client"

import styled from "styled-components";

import ItemWrapper from "../helpers/ItemWrapper";
import ItemText from "../helpers/ItemText";

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'row'};
  align-items: ${(props) => props.$alignItems ?? 'flex-start'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '0'};
  max-width: ${(props) => props.$maxWidth ?? 'auto'};
  min-width: ${(props) => props.$minWidth ?? 'auto'};
  background-color: ${(props) => props.$backgroundColor ?? 'transparent'};
  color: white;
`;

const Text = styled(ItemText)`
  font-family: ${(props) => props.fontFamily ?? 'Labrador B'};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  font-size: ${(props) => props.fontSize ?? '2rem'};
  font-style: ${(props) => props.fontStyle ?? 'normal'};
  text-align: ${(props) => props.$textAlign ?? 'start'};
  color: ${(props) => props.color ?? 'white'};

`;


export { Wrapper, Text };