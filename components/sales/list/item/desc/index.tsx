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
    <Wrapper>
      <Text className='small-line'>{name}</Text>
      <Text className='big-line' >{cat}</Text>
      <Text className='small-line'>{sku}</Text>
      <Wrapper $display='flex' $flexDirection='row' $justifyContent='space-between' $margin='10px 0 0 0' $minWidth='100%'>
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