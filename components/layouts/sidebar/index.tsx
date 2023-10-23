import { FC } from 'react';

import { NavWrapper, Divisor } from './styles';
import { Wrapper, Text } from '../styles'
import Dropdown from './dropdown/';
import Menu from './menu';
import Manage from './manage';
import ICategoria from '../../../types/categoria';

interface Props {
  $isOpen: boolean;
  $currentX: number;
  cats: ICategoria[];
}

const Sidebar: FC<Props> = ({$isOpen, $currentX, cats}) => {
 
  return (
    <NavWrapper className={`sidebar ${$isOpen ? 'open' : ''}`}
    style={{transform: `translateX(${$currentX}px)`}}>

      <Text fontFamily='Dic Sans' fontWeight='bold' fontSize='2rem'
        $textAlign='left' color='white'>Explore</Text>  

      <Wrapper className='mb-2' $maxWidth='auto' $margin='1.5rem 0'>
        <Dropdown cats={cats}/>
      </Wrapper>

      <Wrapper $display='flex' $flexDirection='column' $alignItems='flex-start' $justifyContent='space-between'>
        <Menu />
      </Wrapper>

      <Wrapper className="dashboard" $flexDirection='column' $alignItems='flex-start' $justifyContent='space-between'
      $minWidth='100%'>
        <Divisor/>
        <Manage />
      </Wrapper>
    </NavWrapper>
  )
}

export default Sidebar;
