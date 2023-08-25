import { FC } from 'react'

import { Image, Wrapper } from './styles';
import IProduct from '../../../../../types/product';

interface Props {
  product: IProduct
}

const Foreground: FC<Props> = ({ product }) => { 
  return (
    <Wrapper className='foreground-container' $backgroundColor='#464646'>
      <Image product={product}/>
    </Wrapper>
  )
}

export default Foreground;