import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Mercadoria from '../../types/item';
import { FC, StrictMode } from 'react';
import Main from '../../components/layouts/main';
import Global from '../../styles/global';
import GlobalThemes from '../../styles/themes'
import Topbar from '../../components/layouts/topbar';
import Content from '../../components/layouts/content';
import Sales from '../../components/sales';
import Selling from '../../components/selling';

export const getStaticPaths: GetStaticPaths = async () => {
  const mercadorias: Mercadoria[] = (await axios.get('http://localhost:8080/Mercadorias')).data
  
  const paths = mercadorias.map((mercadoria) => ({
    params: {
      sku: mercadoria.produto.sku
    }
  }));

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{mercadoria: Mercadoria, sugested: Mercadoria[]}> = async ({params}) => {
  const { sku } = params!;
  const mercadoria = (await axios.get('http://localhost:8080/Mercadorias?s=' + sku)).data[0];
  const sugested = (await axios.get('http://localhost:8080/Mercadorias?rel=&s=' + sku)).data;

  return {
    props: {
      mercadoria,
      sugested
    },
    revalidate: 1800,
  }
}

const Page: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({mercadoria, sugested}) => {
  const produto = mercadoria.produto;
  const title = `${mercadoria.produto.nome} | NCA Parts🔩`;
  return (
    <StrictMode>
      <title>{title}</title>
      <Global />
      <GlobalThemes />

      <header>
        <Topbar changeBar={() => void(0)}/>
      </header>
      
      <Content>

        <Main $width={"100vw"} $overflowY={"scroll"}>          
          <Selling item={mercadoria}/>
          <Sales innerTitle={
            <>Quem compra {produto.subtipo?.nome}, também compra estes:</>
          } items={sugested}/>

        </Main>

      </Content>
    </StrictMode>
  )
}

export default Page;