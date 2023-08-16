import { FC } from "react";

import { API_URL } from "../../../constants";
import { handleExceptions } from "../../utils";

import ProdPage from "./prod-page";
import IItem from "../../../types/item";

const { hfe } = handleExceptions;

interface PageParams {
  produto: string;
}

interface PageProps {
  params: PageParams;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { produto } = params;

  const [mercadoria, sugested] = await fetchMercs(produto);
  return <ProdPage mercadoria={ mercadoria } sugested={ sugested }/>
}

export const generateStaticParams: () => Promise<PageParams[]> = async () => {
  const { hfe } = handleExceptions;

  const mercadorias: IItem[] = await (await fetch(API_URL + "Mercadorias")
  .catch(hfe))?.json().catch(hfe) || [];

  return mercadorias.map((merc) => ({
    produto: merc.produto.sku
  }));
}

type fetchTuple = [IItem, IItem[]];
const fetchMercs: (sku: string) => Promise<fetchTuple> = async (sku: string) => {
  const mercadoria: IItem  = await (await fetch(API_URL + 'Mercadorias?s=' + sku)
  .catch(hfe))?.json().catch(hfe);

  const sugested: IItem[] = await (await fetch(API_URL + 'Mercadorias?rel=&s=' + sku)
  .catch(hfe))?.json().catch(hfe) || [];

  /** mercadoria is returing object in browser, but array object in fetch() */
  return (Array.isArray(mercadoria) ? [mercadoria[0], sugested] : [mercadoria, sugested] );
}

export default Page