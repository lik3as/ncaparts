import 'bootstrap/dist/css/bootstrap.min.css'
import Mercadoria from '../../../types/item';
import { StrictMode } from 'react';
import Global from '../../../styles/global';
import GlobalThemes from '../../../styles/themes'
import Content from '../../../components/layouts/content';
import Sales from '../../../components/sales';
import Selling from '../../../components/selling';
import Head from 'next/head';
import IItem from '../../../types/item';
import ICategoria from '../../../types/categoria';
import { API_URL, SALES_LIST_LIMIT } from '../../../constants';

interface PageParams {
  sku: string;
}

interface PageProps {
  params: PageParams;
}

export const generateStaticParams: () => Promise<PageParams[]> = async () => {
  const mercadorias: Mercadoria[] = await (await fetch(API_URL + 'Mercadorias')).json()
  
  const paths = mercadorias.map((mercadoria) => ({
    sku: mercadoria.produto.sku
  }));

  return paths;
}

const getMercs: (sku: string) => Promise<[IItem, IItem[], ICategoria[]]> = async (sku: string) => {
  try {
    const cats = await (await fetch(API_URL + 'Categorias/Tipos')).json();
    const mercadoria = await (await fetch(API_URL + 'Mercadorias?sku=' + sku)).json();
    const suggestions = await (await fetch(API_URL + `Mercadorias/related?sku=${sku}&limit=${SALES_LIST_LIMIT}&offset=0`)).json();
    return [mercadoria, suggestions, cats]
  } catch (e) {
    throw new Error("Erro nas requisições");
  }

}

const Page = async ({ params }: PageProps) => {
  const { sku } = params;

  const [mercadoria, suggestions, cats] = await getMercs(sku);

  const produto = mercadoria.produto;
  const title = `${mercadoria.produto.sku} | NCA Parts🔩`;
  return (
    <StrictMode>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>

      <Global />
      <GlobalThemes />
      
      <Content withSidebar={false} tipos={cats}
      mainProps={{
        $overflowY: "scroll",
        $width: "100vw"
      }}>
        <Selling item={mercadoria}/>
        <Sales innerTitle={
          <>Quem compra {decodeURIComponent(produto.nome)}, também compra estes:</>
        } items={suggestions} page={0}/>
      </Content>
    </StrictMode>
  )
}

export default Page;