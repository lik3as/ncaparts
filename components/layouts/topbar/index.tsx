'use client';

import React, { FC } from "react"

import { HeaderWrapper, Image, Logo} from "./styles";
import { Text, Wrapper } from "../styles";
import useWindowResize from "../../../hooks/useWindowResize";
import Searchbar from "./searchbar";

import logo from "../../../public/images/logos/medium/logo-h-white-medium.png"
import userIcon from "../../../public/images/small/rounded-user-icon-orange-small.png"
import menuBar from "../../../public/images/menu-burger-white.png"
import Link from "next/link";
import IItem from "../../../types/item";
import { payloadUser } from "../../../types/auth";

interface Props {
  changeBar: () => void
  searchOptions: IItem[] | null;
  userProps?: payloadUser | null;
}

const Topbar: FC<Props> = ({changeBar, searchOptions, userProps}) => {
  const isMobile = useWindowResize() < 768;

  return (
    <HeaderWrapper data-bs-theme="dark" className="bg-dark p-2">
        {/** MENUBAR ONLY APPEARS WHEN THE SCREEN IS < 768px*/}
        <Wrapper $display={isMobile ? "flex" : 'none'} $margin='0 0 0 6px'>
          <Image src={menuBar.src} width="15px" height='15px' onClick={changeBar}/>
        </Wrapper>

        <Wrapper $display="flex" $flexDirection="row" $margin="0 15px 0 10px">
          <Link href="/">
            <Logo src={logo} alt="Couldn't load the logo :( Please, check you connection." width={165} height={45}/> 
          </Link>
        </Wrapper>

        <Wrapper $display="flex" $flexDirection="row" $margin="10px auto" $alignItems="center">
          <Searchbar searchOptions={searchOptions}/>
        </Wrapper>

        <Wrapper $display="flex" $flexDirection="row" $margin="0 15px">
          {(userProps) ? 
            <Text color="white" className="me-3">{userProps.username}</Text> : void(0)
          }
          <Link href="/auth">
            <Image src={userIcon.src} roundedCircle width={40}/>
          </Link>
        </Wrapper>
    </HeaderWrapper>
  )
}

export default Topbar;