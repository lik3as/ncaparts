import { FC } from "react"

import { UL } from "./styles";
import { ListItem } from "./card/styles";

import Product from "./card"
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
            <Link href={"/produtos/" + item.produto.sku}>
              <Product product={item.produto} visiblePrice={item.valor_real}/>
            </Link>
          </ListItem>
        )
      )}
    </UL>
  )
}

export default List;