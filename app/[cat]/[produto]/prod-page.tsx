'use client'

import Head from 'next/head';
import { FC, StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Main from '../../../components/layouts/main';
import Global from '../../../styles/global';
import GlobalThemes from '../../../styles/themes'
import Topbar from '../../../components/layouts/topbar';
import Content from '../../../components/layouts/content';
import Sales from '../../../components/sales';
import Selling from '../../../components/selling';
import IItem from '../../../types/item';

interface Props {
  mercadoria: IItem;
  sugested: IItem[];
}

const Page: FC<Props> = ({mercadoria, sugested}) => {
  const produto = mercadoria.produto;
  const title = `${produto.nome} | NCA Parts🔩`;
  return (
    <StrictMode>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <Global />
      <GlobalThemes />

      <header>
        <Topbar changeBar={() => void(0)} searchOptions={sugested}/>
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