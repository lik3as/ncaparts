import { FC } from 'react'

import { Wrapper, Text, Image, Circle } from './styles'

interface Props {
  price: string;
  name: string;
  cat: string;
  sku: string;
  url: string;
}

const Item: FC<Props> = ({price, name, sku, cat, url}) => {
  return (
    <Wrapper className='item-container rounded-outline' $backgroundColor='#222222'>
      <Wrapper className='foreground rounded-outline' $maxWidth='160px' $backgroundColor='#464646'>
        <Image src={url}/>
      </Wrapper>

      <Wrapper className='desc' $minWidth='100%'>
        <Text>{name}</Text>
        <Text>{cat}</Text>
        <Text>{sku}</Text>
        <Wrapper $display='flex' $flexDirection='row' $justifyContent='space-between' $margin='5px 0 0 0' $minWidth='100%'>
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
    </Wrapper>
  )
}

export default Item;