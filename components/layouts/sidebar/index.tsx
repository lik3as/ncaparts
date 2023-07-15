import { FC, TouchEventHandler } from 'react';

import { Wrapper, Text, NavWrapper, Divisor } from './styles';
import Dropdown from './dropdown/';
import Menu from './menu';
import Manage from './manage';

interface Props {
  $isOpen: boolean;
  $position: number;
}

const Sidebar: FC<Props> = ({$isOpen, $position}) => {
  
  return (
    <NavWrapper className={`sidebar ${$isOpen ? 'open' : ''}`}>

      <Text fontFamily='Dic Sans' fontWeight='bold' fontSize='2rem'
        $textAlign='left' color='white'>{$position}</Text>  

      <Wrapper className='mb-2' $maxWidth='auto' $margin='1.5rem 0'>
        <Dropdown />
      </Wrapper>

      <Wrapper>
        <Menu />
      </Wrapper>


      <Wrapper $flexDirection='column' $alignItems='flex-start' $justifyContent='space-between' $margin='auto 0 25px 0' $maxWidth='100%' $minWidth='100%'>
        <Divisor/>
        <Manage />
      </Wrapper>
    </NavWrapper>
  )
}

export default Sidebar;
