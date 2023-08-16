import { FC } from "react"
import { useRouter } from "next/router";

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
          <ListItem key={index} className="rounded-outline" >
            <Link href={`/${item.produto.tipo?.nome}/${item.produto.sku}`}>
              <Item cat={item.produto.tipo?.nome as string} name={item.produto?.nome} price={item.valor_real}
                sku={item.produto.sku} url={item.produto.imagens[0]} desc={item.produto.desc}/>
            </Link>
          </ListItem>
        )
      )}
    </UL>
  )
}

export default List;