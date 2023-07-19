import { FC } from 'react'

import { Image, Wrapper } from './styles';

interface Props {
  url: string;
}

const Foreground: FC<Props> = ({url}) => {
  return (
    <Wrapper className='foreground' $maxWidth='100%' $backgroundColor='#464646'>
      <Image src={url}/>
    </Wrapper>
  )
}

export default Foreground;