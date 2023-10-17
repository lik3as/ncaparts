'use client';

import Head from "next/head";
import { FC, StrictMode, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import Global from "../../styles/global";
import GlobalThemes from "../../styles/themes";
import Main from "../../components/layouts/main";
import { Wrapper } from "../../components/layouts/styles";
import Utils from "../../styles/utils";
import FormContainer from "../../components/form";
import Canvas from "../../components/canvas";

const Page: FC = () => {
  const [shouldDisplayTerms, setShouldDisplayTerms] = useState(false);

  const handleUserTerms = () => {
    setShouldDisplayTerms(!shouldDisplayTerms);
  }

  return (
    <StrictMode>
      <Head>
        <title>Autenticação | NCA Parts</title>
      </Head>

      <Global/>
      <GlobalThemes/>
      <Utils/>

      <Main $overflowY={"hidden"} $width={"100%"} className="fullscreen dark-background" style={{padding: 0}}>
        <Wrapper className="fullscreen" $flexDirection="row" $justifyContent="flex-start" $margin="0px"> 
          <Wrapper className="canvas-container" $margin="0px" $flexDirection="column">
            <Canvas shouldRenderTerms={shouldDisplayTerms}/>
          </Wrapper>
          
          <Wrapper className="form-container">
            <FormContainer handleUserTerms={handleUserTerms}/>
          </Wrapper>

        </Wrapper>
      </Main>

    </StrictMode>
  )
}

export default Page;