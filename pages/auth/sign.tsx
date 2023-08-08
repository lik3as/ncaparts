import Head from "next/head";
import { FC, StrictMode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


import Global from "../../styles/global";
import GlobalThemes from "../../styles/themes";
import Main from "../../components/layouts/main";
import Image from "next/image";
import { Text, Wrapper } from "../../components/layouts/styles";
import Utils from "../../styles/utils";
import FormContainer from "../../components/sign";

const Page: FC = () => {
  return (
    <StrictMode>

      <Head>

      </Head>

      <Global/>
      <GlobalThemes/>
      <Utils/>

      <Main $overflowY={"hidden"} $width={"100%"} className="fullscreen dark-background" style={{padding: 0}}>
        <Wrapper className="fullscreen" $flexDirection="row" $justifyContent="flex-start" $margin="0px"> 
          <Wrapper className="canvas-container" $margin="0px" $flexDirection="column">
            <Wrapper>
              <Image src='/images/gear.png' alt='gear' width={200} height={200} className="ani-rotate"/>
              <Image src='/images/gear-small.png' alt='gear' width={150} height={150} className="ani-rotate" style={{
                animationDirection: "reverse",
                marginLeft: '-15px',
                marginTop: '-20px'
              }}/>
            </Wrapper>
            <Text fontFamily="Labrador B" fontSize="1.2rem">
              Deixe as peças trabalharem.
            </Text>
          </Wrapper>
          
          <Wrapper className="form-container">
            <FormContainer />
          </Wrapper>

        </Wrapper>
      </Main>

    </StrictMode>
  )
}

export default Page;