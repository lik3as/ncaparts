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
  const resizedUrl = `${imageUrl}?tr=w-150,h-150`;

  return (
    <Wrapper className='foreground-container' $backgroundColor='#464646'>
      <Image src={resizedUrl} alt={alt} width={150} height={150} crossOrigin='anonymous'/>
    </Wrapper>
  )
}

export default Foreground;