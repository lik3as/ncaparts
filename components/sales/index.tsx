import { FC } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { Wrapper, Text } from './styles';
import List from './list';
import IItem from '../../types/item'

interface Props {
  items: IItem[],
  innerTitle?: JSX.Element | null
}

const Sales: FC<Props> = ({items, innerTitle}) => {
  let defaultTitle = <>Melhores <strong>Produtos</strong></>

  if (!innerTitle) {
    innerTitle = defaultTitle;
  }

  return (
    <Wrapper $justifyContent='flex-start' className='sales-container' $margin='auto 0 0 0'>
      <Wrapper $flexDirection='row' $justifyContent='space-between' $alignItems='center' $minWidth='98%'>
        <Text fontWeight={200} fontSize='2.5rem' fontStyle='normal' color='#AAAAAA'>
          {innerTitle}
        </Text>
        <Wrapper $margin='auto 0 13px 15px' $alignItems='flex-end' $display={(innerTitle == defaultTitle) ? "flex" : "none"}>
          <Text color='#AAAAAA'><a><strong>Ver todos</strong></a></Text>
        </Wrapper>

        <Wrapper $flexDirection='row' $margin='0 0px 0 auto'>
          <AiOutlineArrowLeft color='white' size={"1.5rem"} style={{marginRight: '8px'}}/>
          <AiOutlineArrowRight color='white' size={"1.5rem"}/>
        </Wrapper>

      </Wrapper>
      
      <List items={items}/>
    </Wrapper>
  )
}

export default Sales;