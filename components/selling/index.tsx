import { FC } from 'react'

import { Text, Wrapper } from './styles'
import IItem from '../../types/item'
import Form from './form';
import Image from '../image';

interface Props {
  item: IItem;
}

const Selling: FC<Props> = ({item}) => {
  const price = (item.valor_real == "0.00" || !item.valor_real ? "Negocie o preço" : "R$ " + item.valor_real);

  return (
    <Wrapper className="selling-container" $minWidth='100vw' $flexDirection='row'>
        <Image product={item.produto} width={320} height={320} className='object-fit-contain'/>
      <Wrapper $margin='0 20px' $flexDirection='column' className='w-50'>
        <Text h1>{item.produto.nome}</Text>
        <Text fontSize='1.5rem' fontWeight='200'>{item.produto.desc}</Text>

        <Text fontSize='1.5rem' fontWeight='200'className='mt-3'>{price}</Text>
        <Form fabProduto={item.produto.fabricante} nomeProduto={item.produto.nome} skuProduto={item.produto.sku}/>
      </Wrapper>
    </Wrapper>
  )
}

export default Selling;