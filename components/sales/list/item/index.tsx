import { FC } from 'react'

import { ListItem } from './styles'
import Desc from './desc';
import Foreground from './foreground';

interface Props {
  price: string;
  name: string;
  cat: string;
  sku: string;
  url: string;
}

const Item: FC<Props> = ({price, name, sku, cat, url}) => {
  return (
    <ListItem key={sku} className='rounded-outline'>
      <Foreground url={url}/>
      <Desc cat={cat} name={name} price={price} sku={sku} />
    </ListItem>
  )
}

export default Item;