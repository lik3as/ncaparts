import axios from "axios";
import { FC } from "react";

import { handleExceptions } from "../utils";
import { API_URL } from "../../constants";

import CatPage from "./cat-page";
import IItem from "../../types/item";
import ICategoria from "../../types/categoria";

interface PageParams {
  cat: string;
}

interface PageProps {
  params: PageParams
}

const { hfe } = handleExceptions;

const Page: FC<PageProps> = async ({ params }) => {
  const { cat } = params;

  const [items, filteredItems, cats] = await getItemsAndCats(cat);

  /** For some reason, category is URI encoded. */
  return <CatPage items={items} itemsCat={ decodeURIComponent(cat) } cats={cats} filteredItems={filteredItems}/>
}

export const generateStaticParams: () => Promise<PageParams[]> = async () => {
  const cats: ICategoria[] | null = (await axios(process.env.API_URL + "Tipos")).data; 

  if (!cats) {
    return [];
  }

  return cats.map((cat) => ({
    cat: cat.nome
  }));

};

type fetchTuple = [IItem[], IItem[] | null, ICategoria[]];

const getItemsAndCats: (cat: string) => Promise<fetchTuple> = async (cat: string) => {
  const items: IItem[] =  await (await fetch(API_URL + "Mercadorias?type=" + cat).catch(hfe))?.json().catch(hfe) || [];
  const cats: ICategoria[] = await (await fetch(API_URL + "Tipos").catch(hfe))?.json().catch(hfe) || [];

  const filteredItems: IItem[] | undefined = items.filter((item) => {
    return item.produto.tipo?.nome === cat;
  })

  return [items, filteredItems || null, cats] as fetchTuple;
}

export default Page;