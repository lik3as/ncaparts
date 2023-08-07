import { FC } from 'react'

import { Image, Wrapper } from './styles';

interface Props {
  url: string;
  alt: string;
}

const Foreground: FC<Props> = ({url, alt}) => {
  return (
    <Wrapper className='foreground-container' $backgroundColor='#464646'>
      <Image src={url} alt={alt} width={800} height={800}/>
    </Wrapper>
  )
}

export default Foreground;