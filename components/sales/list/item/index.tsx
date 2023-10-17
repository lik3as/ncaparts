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


const Card: FC<Props> = ({ price, name, cat, sku, url, desc }) => {

  return (
    <>
      <Foreground url={url} alt={desc + ' | '  + sku }/>
      <Desc cat={cat} name={name} price={price} sku={sku} />
    </>
  )
}

export default Card;