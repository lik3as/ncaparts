"use server"

import { StrictMode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sales from '../../components/sales';
import Global from '../../styles/global';
import GlobalThemes from '../../styles/themes'
import Landing from '../../components/landing';
import Content from '../../components/layouts/content';
import IItem from '../../types/item';
import ICategoria from '../../types/categoria';
import Head from 'next/head';
import axios from 'axios';
import { API_URL } from '../../constants';

interface PageParams {
  cat: string;
}

interface PageProps {
  params: PageParams
  searchParams?: { [key: string]: string | string }
}

const Page = async ({ params, searchParams }: PageProps) => {
  const { cat } = params;
  const page = +(searchParams?.page ?? 0);

  const [items, cats] = await getItemsAndCats(cat, page);

  const title = "NCA Parts🔩 - " + cat;
  return (
    <StrictMode>

      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>

      <Global />
      <GlobalThemes />

      <Content withSidebar={true} tipos={cats}>
          <Landing />
          <Sales items={items} innerTitle={<>Categoria: <strong>{decodeURIComponent(cat)}</strong></>} page={page}/>
      </Content>

    </StrictMode>
  )
};
export const generateStaticParams: () => Promise<PageParams[]> = async () => {
  const cats: ICategoria[] | null = (await axios(process.env.API_URL + "Tipos")).data; 

  if (!cats) {
    return [];
  }

  return cats.map((cat) => ({
    cat: cat.nome
  }));

};

type fetchTuple = [IItem[], ICategoria[]];

const getItemsAndCats: (cat: string, page: number) => Promise<fetchTuple> = async (cat: string, page: number) => {
  cat = decodeURIComponent(cat);
  const limit = 10,
  offset = page * limit;

  try{
    const items: IItem[]  =  await (await fetch(API_URL + `Mercadorias?limit=${limit}&offset=${offset}&type=${cat}`, { cache: "no-store" })
    )?.json() ?? [];

    const cats: ICategoria[] = await (await fetch(API_URL + "Categorias/Tipos")
    )?.json() ?? [];

    return [items, cats] as fetchTuple;
  }
  catch(e) {
    return [[], []]
  }

}

export default Page;