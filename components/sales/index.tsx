import { FC } from 'react';

import { Wrapper, Text } from './styles';
import List from './list';
import IItem from '../../types/item'

interface Props {
  items: IItem[],
  innerTitle: JSX.Element | null
}

const Sales: FC<Props> = ({items, innerTitle}) => {
  let defaultTitle = <>Melhores <strong>Produtos</strong></>
  let newTitle: null | JSX.Element = defaultTitle;
  if (innerTitle) {
    newTitle = innerTitle;
  }

  return (
    <Wrapper $justifyContent='flex-start' className='sales-container' $margin='auto 0 0 0'>
      <Wrapper $flexDirection='row' $alignItems='center'>
        <Text fontWeight={200} fontSize='2.5rem' fontStyle='normal' color='#AAAAAA'>
          {newTitle}
        </Text>
        <Wrapper $margin='auto 0 13px 15px' $alignItems='flex-end' $display={(newTitle == defaultTitle) ? "flex" : "none"}>
          <Text color='#AAAAAA'><a><strong>Ver todos</strong></a></Text>
        </Wrapper>
      </Wrapper>
      
      <List items={items}/>
    </Wrapper>
  )
}

export default Sales;