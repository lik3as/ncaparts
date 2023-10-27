import { FC } from 'react'

import { Image, Wrapper } from './styles';
import { logoVerticalBlack } from '../../../../../constants';
import useImageUrl from '../../../../../hooks/useImageUrl';

interface Props {
  url?: string;
  alt: string;
}

const Foreground: FC<Props> = ({url, alt}) => { 
  const imageUrl = useImageUrl(url, logoVerticalBlack);

  return (
    <Wrapper className='foreground-container' $backgroundColor='#464646'>
      <Image src={imageUrl} alt={alt} width={150} height={150}/>
    </Wrapper>
  )
}

export default Foreground;