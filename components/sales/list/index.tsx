import { FC } from "react"

import { UL } from "./styles";
import { ListItem } from "./item/styles";

import Item from "./item"
import IItem from '../../../types/item'

interface Props {
  items: IItem[];
}
const List: FC<Props> = ({items}) => {

  return (
    <UL>
      {items.map((item) => (
        <ListItem key={item.sku} className="rounded-outline">
          <Item cat={item.cat} name={item.name} price={item.price} sku={item.sku} url={item.url} />
        </ListItem>
        )
      )}
    </UL>
  )
}

export default List;