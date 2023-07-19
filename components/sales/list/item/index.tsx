import { FC } from 'react'

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
    <>
      <Foreground url={url}/>
      <Desc cat={cat} name={name} price={price} sku={sku} />
    </>
  )
}

export default Item;