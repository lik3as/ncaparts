import { StrictMode } from "react";
import Global from "../../styles/global";
import GlobalThemes from "../../styles/themes";
import Content from "../../components/layouts/content";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Text } from "../../components/selling/styles";
import { Image, Wrapper } from "../../components/landing/styles";
import { API_URL } from "../../constants";

export default async function Page() {
  const tipos = await (await fetch(API_URL + "Categorias/Tipos")).json();

  return(
    <StrictMode>
      <Global />
      <GlobalThemes />
      
      <Content tipos={tipos} mainProps={{
        $overflowY: "hidden",
        $width: "100vw"
      }}>
        <Wrapper $display="flex" $flexDirection="column" $alignItems="center" $justifyContent="space-between">
          <Text h1 fontSize="4rem"> 404 </Text>
          <Text h1> Não foi possível encontrar a esta página no momento! </Text>
          <Image src='/images/logos/logo-white.png'/>
        </Wrapper>
      </Content>
    </StrictMode>
  )
}