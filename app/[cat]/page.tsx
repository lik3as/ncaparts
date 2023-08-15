import { GetStaticPaths, GetStaticProps } from "next";
import CatPage from "./cat-page";
import IItem from "../../types/item";
import ICategoria from "../../types/categoria";
import axios from "axios";
import { FC } from "react";

interface PageProps {
  cat: string;
}

const Page: FC<PageProps> = async ({ cat }) => {
  const [items, filteredItems, cats] = await getItemsAndCats(cat);

  return <CatPage items={items} itemsCat={cat} cats={cats} filteredItems={filteredItems}/>
}

export const generateStaticParams: () => Promise<PageProps[] | null> = async () => {
  const cats: ICategoria[] | null = (await axios(process.env.API_URL + "Tipos")).data; 

  if (!cats) {
    return [];
  }

  return await Promise.all(cats.map(async (cat) => {{
    return {
      cat: cat.nome
    }
  }}));

};

const getItemsAndCats = async (cat: string) => {
  const items: IItem[] = (await axios(process.env.API_URL + "Mercadorias")).data || [];
  const cats: ICategoria[] = (await axios(process.env.API_URL + "Tipos")).data || [];

  const filteredItems: IItem[] | undefined = items.filter((item, i, arr) => {
    return item.produto.tipo?.nome === cat;
  })

  return [items, filteredItems || null, cats] as [IItem[], IItem[] | null, ICategoria[]];
}

export default Page;