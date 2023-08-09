import { FC } from "react"
import { Image, Wrapper } from '../styles'
import { Text } from "../../layouts/styles";

const Gears: FC = () => {

  return (
    <Wrapper>
      <Wrapper className="gear-container big">
        <Image src='/images/gear.png' alt='gear' width={200} height={200} className="ani-rotate"/>
      </Wrapper>
      
      <Wrapper className="gear-container small" >
        <Image src='/images/gear-small.png' alt='gear' width={150} height={150} className="ani-rotate" style={{
          animationDirection: "reverse"
        }}/>
      </Wrapper>

    </Wrapper>
  )
}

export default Gears;