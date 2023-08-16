import { FC } from "react"

import { UL } from "./styles";
import { ListItem } from "./item/styles";

import Item from "./item"
import IItem from '../../../types/item'
import Link from "next/link";

interface Props {
  items: IItem[] | null;
}

const List: FC<Props> = ({items}) => { 

  return (
    <UL>
      {items?.map((item, index) => (
        <Link href={`/${item.produto.tipo?.nome}/${item.produto.sku}`} key={index}>
          <ListItem key={index} className="rounded-outline" >
              <Item cat={item.produto.tipo?.nome as string} name={item.produto?.nome} price={item.valor_real}
              sku={item.produto.sku} url={item.produto.imagens[0]} desc={item.produto.desc}/>
          </ListItem>
        </Link>
        )
      )}
    </UL>
  )
}

export default List;