import { FC } from 'react';
import { Wrapper, Text } from './styles';
import Item from './item';

import items from './items.json';
const item = items[0];
const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

const Sales: FC = () => {
  return (
    <Wrapper>
      <Wrapper $flexDirection='row' $alignItems='center'>
        <Text fontWeight={200} fontSize='2.5rem' fontStyle='normal' color='#AAAAAA'>
          Melhores <strong>Produtos</strong>
        </Text>
        <Wrapper $margin='auto 0 13px 15px' $alignItems='flex-end'>
          <Text color='#AAAAAA'><a><strong>Ver todos</strong></a></Text>
        </Wrapper>
      </Wrapper>
      
      <ul>
        {items.map((item) => (
          <li key={item.sku}>
            <Item cat={item.cat} name={item.name} price={item.name} sku={item.sku} url={item.url} />
          </li>
          )
        )}
      </ul>
    </Wrapper>
  )
}

export default Sales;