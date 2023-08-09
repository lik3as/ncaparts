import styled from "styled-components";
import ItemImage from 'next/image'
import ItemWrapper from "../helpers/ItemWrapper";
import ItemText from "../helpers/ItemText";

const Image = styled(ItemImage)`
width: 100%;
height: 100%;
`;

const Wrapper = styled(ItemWrapper)`
display: ${(props) => props.$display ?? 'flex'};
flex-direction: ${(props) => props.$flexDirection ?? 'row'};
align-items: ${(props) => props.$alignItems ?? 'center'};
justify-content: ${(props) => props.$justifyContent ?? 'center'};
margin: ${(props) => props.$margin ?? '20px 0px'};
max-width: ${(props) => props.$maxWidth ?? '100%'};
min-width: ${(props) => props.$minWidth ?? 'auto'};
background-color: ${(props) => props.$backgroundColor ?? 'transparent'};
transition: all .6s ease;

&.translate-up {
  transform: translateY(-14rem);  
}

&.translate-up .gear-container {
  transform: scale(.8);
}

&.translate-up .gear-container.big {
  margin-top: 12px;
  margin-right: -27px;
}

&.translate-up .gear-container {
  margin-bottom: -38px;
}

&.gear-container {
  margin-bottom: -20px;
}

&.big {
  width: 190px;
  height: 190px;
}

&.small {
  width: 150px;
  height: 150px;
  margin-top: -10px;
  margin-left: -20px;
}

&.term {
  opacity: 0;
  position: fixed;
  top: 35vh;
  transition: opacity .5s ease-in;
  transition: opacity .2s ease-out;
  overflow-y: scroll;
  max-height: 60vh;

}

&.term.visible {
  opacity: 1;
}

&.term * {
  text-align: justify;
}

`;

const Text = styled(ItemText)`
  font-family: ${(props) => props.fontFamily ?? 'Arial, Helvetica, sans-serif'};
  font-weight: ${(props) => props.fontWeight ?? 'normal'};
  font-size: ${(props) => props.fontSize ?? '1rem'};
  text-align: ${(props) => props.$textAlign ?? 'center'};
  color: ${(props) => props.color ?? 'black'};

  &.term {
    overflow-y: scroll;

  }

  &.term br {
    margin-bottom: 5px;
  }

`;

export { Image, Wrapper, Text };