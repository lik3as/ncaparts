import styled from "styled-components";

import { Wrapper as ItemWrapper } from "../../../styles";
import ItemText from "../../../../helpers/ItemText";

const Wrapper = styled(ItemWrapper)`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  ul li {
    display: inline-block;
    margin: 0 3px 0 0;
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
  word-break: break-word;
  align-self: center;

  &:hover {
    color: white;
    cursor: pointer;
  }

  &.small-line {
    line-height: 100%;
  }

  &.big-line {
    line-height: 200%;
  }
`;

const Circle = styled.span`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  margin: 0;

  &.grey {
    background-color: #444444;
  }

  &.whitesmoke {
    background-color: #bbb;
  }
`;

export { Wrapper, Text, Circle };