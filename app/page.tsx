import { StrictMode, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sales from '../components/sales';
import Global from '../styles/global';
import GlobalThemes from '../styles/themes'
import Landing from '../components/landing';
import Content from '../components/layouts/content';
import { API_URL, SALES_LIST_LIMIT } from '../constants';
import IItem from '../types/item';

const HomePage = async () => {
  /** Revalida a rota /Mercadorias de uma em uma hora */
  const items: IItem[] = (await (await fetch(API_URL + `Mercadorias?limit=${SALES_LIST_LIMIT}&offset=0`, {next: {revalidate: 1 * (60 * 60)}})).json()) ?? []; 
  const tipos = await (await fetch(API_URL + "Categorias/Tipos", {cache: "no-store"})).json();

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