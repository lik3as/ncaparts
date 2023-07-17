import styled from "styled-components";
import { Image as ItemImage } from "react-bootstrap";

import ItemWrapper from '../../helpers/ItemWrapper';
import NextImage from 'next/image'

const Wrapper = styled(ItemWrapper)`
  display: ${(props) => props.$display ?? 'flex'};
  flex-direction: ${(props) => props.$flexDirection ?? 'row'};
  align-items: ${(props) => props.$alignItems ?? 'center'};
  justify-content: ${(props) => props.$justifyContent ?? 'center'};
  margin: ${(props) => props.$margin ?? '10px'};
  max-width: ${(props) => props.$maxWidth ?? '100%'};
  background-color: ${(props) => props.$backgroundColor ?? 'transparent'};
`;

const HeaderWrapper = styled.nav`
  top: 0px;
  width: 100%;
  height: var(--header-height);
  background-color: #000000;
  padding: 0 !important;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(NextImage)`
  width: 165px;
  height: 45px;
  object-fit: contain;

  @media screen and (max-width: 768px){
    content: url('/images/logo/logo-white.png');
    width: 65px;
    height: 35px;
  }
`
const Image = styled(ItemImage)`
  width: 40px;
  object-fit: contain;

  @media screen and (max-width: 768px){
    width: 35px;
  }
`;

export { Wrapper, HeaderWrapper, Logo, Image };