import styled from "styled-components";
import { Image as ItemImage } from "react-bootstrap";

import NextImage from 'next/image'

const HeaderWrapper = styled.nav`
  position: fixed;
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
  margin-left: 15px;

  @media screen and (max-width: 768px){
    content: url('/images/logos/logo-white.png');
    width: 65px;
    height: 35px;
    margin: 0;
  }
`
const Image = styled(ItemImage)`
  width: 40px;
  object-fit: contain;

  @media screen and (max-width: 768px){
    width: 35px;
  }
`;

export { HeaderWrapper, Logo, Image };