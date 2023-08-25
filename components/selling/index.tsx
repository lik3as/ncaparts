import { FC } from 'react'

import { Text, Wrapper } from './styles'
import IItem from '../../types/item'
import Form from './form';
import axios from 'axios';
import Image from '../image';

interface Props {
  item: IItem;
}

const Selling: FC<Props> = ({item}) => {
  const price = (item.valor_real == "0.00" || !item.valor_real ? "Negocie o preço" : "R$ " + item.valor_real);

  return (
    <Wrapper className="selling-container" $minWidth='100vw' $flexDirection='row'>
      <Wrapper $maxWidth='20rem'>
        <Image product={item.produto}/>
      </Wrapper>
      <Wrapper $margin='0 20px' $flexDirection='column'>
        <Text h1>{item.produto.nome}</Text>
        <Text fontSize='1.5rem' fontWeight='200'>{item.produto.desc}</Text>
        <Text fontSize='1.5rem' fontWeight='200'>{price}</Text>
        <Form marcaProduto={item.produto.marca} nomeProduto={item.produto.nome} skuProduto={item.produto.sku}/>
      </Wrapper>
    </Wrapper>
  )
}

export default Selling;