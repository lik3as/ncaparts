import React, { FC } from 'react'
import { CloseButton } from "react-bootstrap";

import { Wrapper, HeaderWrapper, Image, Logo} from './styles';
import Searchbar from "./searchbar";
import logo from '../../../public/images/logo.png'
import userIcon from '../../../public/images/rounded-user-icon-blue-green.png'


const UserIcon: FC = () => {
  return (
    <>
      <Image src={userIcon.src} roundedCircle></Image>
      <CloseButton/>
    </>
  )
}

const Topbar: FC = () => {
  return (
    <HeaderWrapper data-bs-theme="dark" className='bg-dark p-2'>
        <Wrapper $display="flex" $flexDirection="row" $margin="0">
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