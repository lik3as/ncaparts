"use client"

import { StrictMode } from "react";
import Global from "../styles/global";
import GlobalThemes from "../styles/themes";
import Topbar from "../components/layouts/topbar";
import Content from "../components/layouts/content";
import Main from "../components/layouts/main";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Text } from "../components/selling/styles";
import { Image, Wrapper } from "../components/landing/styles";

export default function NotFound() {
  return(
    <StrictMode>
      <Global />
      <GlobalThemes />

      <header>
        <Topbar changeBar={() => void(0)} searchOptions={null}/>
      </header>
      
      <Content>

        <Main $width={"100vw"} $overflowY={"scroll"}>
          <Wrapper $display="flex" $flexDirection="column" $alignItems="center" $justifyContent="space-between">
            <Text h1 fontSize="4rem"> 404 </Text>
            <Text h1> Não foi possível encontrar a esta página no momento! </Text>
            <Image src='/images/logo/logo-white.png'/>
          </Wrapper>
        </Main>

      </Content>
    </StrictMode>
  )
}