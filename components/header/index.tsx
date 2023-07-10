import styled from "styled-components";
import React, { FC } from 'react'
import { Form, Image, CloseButton } from "react-bootstrap";

import { Wrapper, Button, InputGroup, HeaderWrapper, Logo, Text } from './styles'
import logo from '../../public/logo.png'
import userIcon from '../../public/rounded-user-icon-blue-green.png'

const Searchbar: FC = () => {
  return (
      <InputGroup className="mb-2" size="lg">
        <Form.Control
          placeholder="Nome ou SKU do produto"
          aria-label="O que você está buscando?"
          aria-describedby="basic-addon1"
          style={{textAlign: 'left'}}
        />
        <Button variant="outline-secondary" style={{backgroundColor: '#33393e'}}>Buscar</Button>
      </InputGroup>
  )
}

const UserIcon: FC = () => {
  return (
    <>
      <Image src={userIcon.src} roundedCircle width={65} height={65}></Image>
      <CloseButton/>
    </>
  )
}

const Header: FC = () => {
  return (
    <HeaderWrapper data-bs-theme="dark" className='bg-dark p-2' style={{padding: '0 !important'}}>
      <Wrapper $margin="0" $flexDirection="row" $display="flex" $justifyContent="space-between" $alignItems="center">
        <Wrapper $display="flex" $flexDirection="row" $margin="0">
          <Logo src={logo} alt="Couldn't load the logo :( Please, check you connection."/> 
        </Wrapper>
        <Wrapper $display="flex" $flexDirection="row" $margin="10px auto">
          <Searchbar />
        </Wrapper>
        <Wrapper $display="flex" $flexDirection="row" $margin="0 15px 0 0">
          <UserIcon />
        </Wrapper>
      </Wrapper>
    </HeaderWrapper>
  )
}

export default Header;