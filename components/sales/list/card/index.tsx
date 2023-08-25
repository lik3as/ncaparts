import { FC } from 'react'

import Desc from './desc';
import Foreground from './foreground';
import IProduct from '../../../../types/product';

interface Props {
  product: IProduct;
  visiblePrice: string;
}

const Card: FC<Props> = ({ product, visiblePrice }) => {

  return (
    <>
      <Foreground product={product}/>
      <Desc cat={product.tipo?.nome!} name={product.nome} price={visiblePrice} sku={product.sku} />
    </>
  )
}

export default Card;