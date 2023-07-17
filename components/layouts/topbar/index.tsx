'use client'

import React, { FC } from 'react'
import { CloseButton } from "react-bootstrap";

import { Wrapper, HeaderWrapper, Image, Logo} from './styles';
import useWindowResize from '../../../hooks/useWindowResize';
import Searchbar from "./searchbar";

import logo from '../../../public/images/logo/logo-h-white.png'
import userIcon from '../../../public/images/rounded-user-icon-orange.png'
import menuBar from '../../../public/images/menu-burger-white.png'

interface Props {
  changeBar: () => void
}
const UserIcon: FC = () => {
  return (
    <>
      <Image src={userIcon.src} roundedCircle/>
      <Wrapper $margin='0 8px'>
        <CloseButton/>
      </Wrapper>
    </>
  )
}

const Topbar: FC<Props> = ({changeBar}) => {
  const isMobile = useWindowResize() < 768;

  return (
    <HeaderWrapper data-bs-theme="dark" className='bg-dark p-2'>
        <Wrapper $display={isMobile ? 'flex' : 'none'} $margin='0 0 0 3px'>
          <Image src={menuBar.src} width='15px' height='15px' onClick={changeBar}/>
        </Wrapper>
        <Wrapper $display="flex" $flexDirection="row" $margin="0 15px">
          <Logo src={logo} alt="Couldn't load the logo :( Please, check you connection."/> 
        </Wrapper>
        <Wrapper $display="flex" $flexDirection="row" $margin="10px auto">
          <Searchbar />
        </Wrapper>
        <Wrapper $display="flex" $flexDirection="row" $margin="0 15px">
          <UserIcon />
        </Wrapper>
    </HeaderWrapper>
  )
}

export default Topbar;