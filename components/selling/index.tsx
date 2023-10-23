import { FC } from 'react'

import { Text, Wrapper, Image } from './styles'
import IItem from '../../types/item'
import Form from './form';

interface Props {
  item: IItem;
}

const Selling: FC<Props> = ({item}) => {
  const price = (item.valor_real == "0.00" || !item.valor_real ? "Negocie o preço" : "R$ " + item.valor_real);

  return (
    <Wrapper className="selling-container" $minWidth='100vw' $flexDirection='row'>
      <Wrapper $maxWidth='20rem'>
        <Image src={(item.produto.imagens[0]) ?? '/images/logos/logo-white.png'} alt={item.produto.desc + ' | ' + item.produto.sku}/>
      </Wrapper>
      <Wrapper $margin='0 20px' $flexDirection='column' className='w-25'>
        <Text h1>{item.produto.nome}</Text>
        <Text fontSize='1.5rem' fontWeight='200'>{item.produto.desc}</Text>
        <Text fontSize='1.5rem' fontWeight='200'>{price}</Text>
        <Form fabProduto={item.produto.fabricante} nomeProduto={item.produto.nome} skuProduto={item.produto.sku}/>
      </Wrapper>
    </Wrapper>
  )
}

export default Selling;