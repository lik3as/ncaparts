import HomePage from "./home-page";

import { API_URL } from "../constants";

export default async function Page() {
  /** Similar to getStaticProps, according to
   *  @see https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods
  */

  const items = await (await fetch(API_URL + "Mercadorias")).json(); 
  const tipos = await (await fetch(API_URL + "Tipos")).json();
  
  return <HomePage items={items} tipos={tipos}/>
}