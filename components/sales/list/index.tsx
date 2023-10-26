import { FC } from "react"
import { track } from "@vercel/analytics";

import { UL } from "./styles";
import { ListItem } from './item/styles'

import Item from './item'
import IItem from '../../../types/item'
import Link from "next/link";

interface Props {
  items: IItem[];
}

const List: FC<Props> = ({items}) => { 
  return (
    <UL>
      {items.map((item, index) => (
        <Link href={`/produtos/${item.produto.sku}`} key={index}>
          <ListItem key={index} className="rounded-outline" onClick={() => {
            track("Item Select", {itemName: item.produto.nome, itemSku: item.produto.sku})
          }}>
            <Item cat={item.produto.tipos[0].nome} name={item.produto?.nome} price={item.valor_real}
              sku={item.produto.sku} url={item.produto.imagens[0]} desc={item.produto.desc}/>
          </ListItem>
        </Link>
        )
      )}
    </UL>
  )
}

export default List;