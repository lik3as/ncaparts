import { FC } from 'react';

import { Wrapper, Text } from './styles';
import List from './list';
import items from './items.json'

const Sales: FC = () => {
  return (
    <Wrapper $justifyContent='flex-start' className='sales-container' $margin='auto 0 0 0'>
      <Wrapper $flexDirection='row' $alignItems='center'>
        <Text fontWeight={200} fontSize='2.5rem' fontStyle='normal' color='#AAAAAA'>
          Melhores <strong>Produtos</strong>
        </Text>
        <Wrapper $margin='auto 0 13px 15px' $alignItems='flex-end'>
          <Text color='#AAAAAA'><a><strong>Ver todos</strong></a></Text>
        </Wrapper>
      </Wrapper>
      
      <List items={items}/>
    </Wrapper>
  )
}

export default Sales;