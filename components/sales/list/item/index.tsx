import { FC } from 'react'

import Desc from './desc';
import Foreground from './foreground';

interface Props {
  price: string;
  name: string;
  cat: string;
  sku: string;
  url: string;
  desc: string;
}

const Item: FC<Props> = ({price, name, sku, cat, url, desc}) => {
  return (
    <>
      <Foreground url={url} alt={desc + ' | ' + sku}/>
      <Desc cat={cat} name={name} price={price} sku={sku} />
    </>
  )
}

export default Item;