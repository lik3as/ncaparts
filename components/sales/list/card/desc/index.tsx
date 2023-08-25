import { FC } from 'react';

import { Wrapper, Text, Circle } from './styles'; 

interface Props {
  price: string;
  name: string;
  cat: string;
  sku: string;
}

const Desc: FC<Props> = ({price, name, cat, sku}) => {
  return (
    <Wrapper className='desc-container'>
      <Wrapper>
        <Text className='small-line'>{name}</Text>
        <Text className='big-line' >{cat}</Text>
        <Text className='small-line'>{sku}</Text>
      </Wrapper>
      <Wrapper $display='flex' $flexDirection='row' $justifyContent='space-between' $minWidth='100%' className='colors-container'>
        <Wrapper $margin='0 auto 0 0'>
          <ul>
            <li>
              <Circle className='grey'/>
            </li>
            <li>
              <Circle className='whitesmoke'/>
            </li>
          </ul>
        </Wrapper>
        <Wrapper>
          <Text>{price}</Text>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default Desc;