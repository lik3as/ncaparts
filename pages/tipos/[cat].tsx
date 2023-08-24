import { FC, useState, TouchEvent, StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Topbar from '../../components/layouts/topbar';
import Sidebar from '../../components/layouts/sidebar'
import Sales from '../../components/sales';
import Global from '../../styles/global';
import GlobalThemes from '../../styles/themes'
import Landing from '../../components/landing';
import Main from '../../components/layouts/main';
import Content from '../../components/layouts/content';
import IItem from '../../types/item';
import axios from 'axios';
import ICategoria from '../../types/categoria';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({items, categorias, cat}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [startX, setStartX] = useState(0);

  function handleTouchStart (ev: TouchEvent) {
    setStartX(ev.touches[0].clientX);
  };

  function handleTouchMove (ev: TouchEvent) {
    const deltaX = ev.touches[0].clientX - startX;
    if (isOpen && deltaX > 0) {
      return;
    } else if (!isOpen && deltaX > 160) {
      return setCurrentX(160);
    } else {
      setCurrentX(deltaX);
    }
  };

  function handleTouchEnd () {
    if (currentX >= 80) {
      setIsOpen(true);
    } else if (currentX <= -80) {
      setIsOpen(false);
    }

    setCurrentX(0);
  };

  function changeBar() {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  };

  const title = "NCA Parts🔩 - " + cat;
  return (
    <StrictMode>

      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>

      <Global />
      <GlobalThemes />

      <header>
        <Topbar changeBar={changeBar} searchOptions={items}/>
      </header>

      <Content onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart}
       className={`main-content ${isOpen ? 'hidden' : ''}`}>

        <Sidebar $isOpen={isOpen} $currentX={currentX} cats={categorias}/>

        <Main $width={null} $overflowY={null}>
          <Landing />
          <Sales items={items} innerTitle={<>Categoria: <strong>{cat}</strong></>}/>
        </Main>
      </Content>

    </StrictMode>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mercadorias: IItem[] = (await axios(process.env.API_URL + "Mercadorias")).data; 
  const tipos: ICategoria[] = (await axios(process.env.API_URL + "Tipos")).data;

  const paths = await Promise.all(tipos.map( async (tipo, i) => {{
    const type = tipo.nome;

    return {
      params: {
        cat: type
      }
    }
  }}));

  return {
    paths: paths,
    fallback: false, 
  }
};

export const getStaticProps: GetStaticProps<{categorias: ICategoria[], items: IItem[], cat: string}> = async ({params}) => {
  const  cat = params!.cat as string;
  const page = parseInt((params!.cat[1] as string));

  const items = (await axios(process.env.API_URL + "Mercadorias?type=" + cat)).data;
  const categorias = (await axios(process.env.API_URL + "Tipos")).data;

  return {
    props: {
      items,
      categorias,
      cat
    },
    revalidate: 900
  }
};

export default Home;