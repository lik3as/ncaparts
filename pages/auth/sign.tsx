import Head from "next/head";
import { FC, StrictMode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


import Global from "../../styles/global";
import GlobalThemes from "../../styles/themes";
import Main from "../../components/layouts/main";
import Image from "next/image";
import { Wrapper } from "../../components/landing/styles";
import Utils from "../../styles/utils";

const Page: FC = () => {
  return (
    <StrictMode>

      <Head>

      </Head>

      <Global/>
      <GlobalThemes/>
      <Utils/>

      <Main $overflowY={"hidden"} $width={"100%"} className="fullscreen dark-background">
        <Wrapper $justifyContent="center" $alignItems="center" $flexDirection="row">
          <Image src='/images/gear-white.png' alt='gear' width={200} height={200} className="ani-rotate"/>
          <Image src='/images/gear-small-white.png' alt='gear' width={150} height={150} className="ani-rotate" style={{
              animationDirection: "reverse",
              marginLeft: '-15px',
              marginTop: '-20px'
            }}/>
            
        </Wrapper>
      </Main>

    </StrictMode>
  )
}

export default Page;