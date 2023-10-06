import { FC, StrictMode, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sales from '../components/sales';
import Global from '../styles/global';
import GlobalThemes from '../styles/themes'
import Landing from '../components/landing';
import Content from '../components/layouts/content';
import { API_URL } from '../constants';
import IItem from '../types/item';

const HomePage = async () => {
  const items: IItem[] = (await (await fetch(API_URL + "Mercadorias?limit=10&offset=0", { cache: "no-store" })).json()) ?? []; 
  const tipos = await (await fetch(API_URL + "Categorias/Tipos")).json();

  return (
    <StrictMode>

      <Global />
      <GlobalThemes /> 

      <Content tipos={tipos} withSidebar={true}>
        <Landing />
        <Sales items={items} page={0}/>
      </Content>

    </StrictMode>
  )
};

export default HomePage;