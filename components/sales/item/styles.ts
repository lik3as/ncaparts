import styled from "styled-components";
import { Image as ItemImage } from "react-bootstrap";

import ItemText from "../../helpers/ItemText";
import ItemWrapper from "../../helpers/ItemWrapper";

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'column'};
  align-items: ${(props) => props.$alignItems ?? 'flex-start'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '0'};
  max-width: ${(props) => props.$maxWidth ?? '100%'};
  min-width: ${(props) => props.$minWidth ?? 'auto'};
  background-color: ${(props) => props.$backgroundColor ?? 'transparent'};

  &.rounded-outline {
    border: 6px solid transparent;
    border-radius: 6px;
    outline: #444444 solid 1px;
  }

  &.foreground {
    margin-bottom: 10px;
    padding: 2rem;
  }

  &.item-container {
    transition: all .3s ease;
    padding: 5px;
  }

  &.item-container:hover {
    transform: perspective(200px) translateZ(5px);
    outline-color: #666666;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    display: inline-block;
    margin-right: 3px;
  }

`;

const Text = styled(ItemText)`
  font-family: ${(props) => props.fontFamily ?? 'Labrador B'};
  font-weight: ${(props) => props.fontWeight ?? '500'};
  font-size: ${(props) => props.fontSize ?? '1rem'};
  font-style: ${(props) => props.fontStyle ?? 'normal'};
  text-align: ${(props) => props.$textAlign ?? 'center'};
  color: ${(props) => props.color ?? 'white'};
  margin-bottom: -6px;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Image = styled(ItemImage)`
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
`;

const Circle = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;

  &.grey {
    background-color: #444444;
  }

  &.whitesmoke {
    background-color: #bbb;
  }
`;

export { Wrapper, Text, Image, Circle }