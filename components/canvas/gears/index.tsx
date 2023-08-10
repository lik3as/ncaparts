import { FC } from "react";
import { Image, Wrapper } from '../styles';
import gearWhite from '../../../public/images/gear-white.png';
import gearSmallWhite from '../../../public/images/gear-small-white.png';

interface Props {
  isWhiteGears?: boolean;
}

const Gears: FC<Props> = ({isWhiteGears}) => {

  return (
    <Wrapper className="mb-3">
      <Wrapper className="gear-container big">
        <Image src={ (isWhiteGears) ? gearWhite.src : '/images/gear.png'} alt='gear' width={200} height={200} className="ani-rotate"/>
      </Wrapper>
      
      <Wrapper className="gear-container small" >
        <Image src={ (isWhiteGears) ? gearSmallWhite.src : '/images/gear-small.png'} alt='gear' width={150} height={150} className="ani-rotate" style={{
          animationDirection: "reverse"
        }}/>
      </Wrapper>

    </Wrapper>
  )
}

export default Gears;