import { FC } from "react"

import { Ul } from "./styles";

import Item from "./item"
import IItem from '../../../types/item'

interface Props {
  items: IItem[];
}
const List: FC<Props> = ({items}) => {

  return (
    <Ul>
      {items.map((item) => (
        <Item cat={item.cat} name={item.name} price={item.price} sku={item.sku} url={item.url} />
        )
      )}
    </Ul>
  )
}

export default List;