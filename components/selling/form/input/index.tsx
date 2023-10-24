import { FC } from "react";
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
import { Button } from "./styles";

import { Wrapper } from "../styles";

interface Props {
  buyCount: number;
  clickHandler: (action: 'increase' | 'decrease') => () => void;
}

const ItemInput: FC<Props> = ({clickHandler, buyCount}) => {

  return (
    <Wrapper $alignItems="center" className="input-container">
      <Button onClick={clickHandler('decrease')} type="button"> <FiMinus/> </Button>
      <Wrapper $minWidth="30px">{buyCount}</Wrapper>
      <Button onClick={clickHandler('increase')} type="button"> <FiPlus/> </Button>
    </Wrapper>
  )
}

export default ItemInput;
