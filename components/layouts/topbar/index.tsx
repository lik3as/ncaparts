'use client';

import React, { FC } from "react"

import { HeaderWrapper, Image, Logo} from "./styles";
import { Wrapper } from "../styles";
import useWindowResize from "../../../hooks/useWindowResize";
import Searchbar from "./searchbar";

import logo from "../../../public/images/logos/logo-h-white.png"
import userIcon from "../../../public/images/rounded-user-icon-orange.png"
import menuBar from "../../../public/images/menu-burger-white.png"
import Link from "next/link";
import IItem from "../../../types/item";
import useCookie from "../../../hooks/useCookie";

interface Props {
  changeBar: () => void
  searchOptions: IItem[] | null;
}
const UserIcon: FC = () => {
  return (
    <>
      <Link href="/auth/sign">
        <Image src={userIcon.src} roundedCircle/>
      </Link>
    </>
  )
}

const Topbar: FC<Props> = ({changeBar, searchOptions}) => {
  const isMobile = useWindowResize() < 768;
  const token = useCookie("token");

  console.log(token);
  return (
    <HeaderWrapper data-bs-theme="dark" className="bg-dark p-2">
        <Wrapper $display={isMobile ? "flex" : 'none'} $margin='0 0 0 6px'>
          <Image src={menuBar.src} width="15px" height='15px' onClick={changeBar}/>
        </Wrapper>
        <Wrapper $display="flex" $flexDirection="row" $margin="0 15px 0 10px">
          <Link href="/">
            <Logo src={logo} alt="Couldn't load the logo :( Please, check you connection." /> 
          </Link>
        </Wrapper>
        <Wrapper $display="flex" $flexDirection="row" $margin="10px auto" $alignItems="center">
          <Searchbar options={searchOptions}/>
        </Wrapper>
        <Wrapper $display="flex" $flexDirection="row" $margin="0 15px">
            <UserIcon />
        </Wrapper>
    </HeaderWrapper>
  )
}

export default Topbar;