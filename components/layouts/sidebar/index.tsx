import React, { FC } from 'react';

import { Wrapper, Text, NavWrapper, Divisor } from './styles';
import Dropdown from './dropdown/';
import Menu from './menu';
import Manage from './manage'

const Navigator: FC = () => {
  return (
    <NavWrapper>
      <Text fontFamily='Dic Sans' fontWeight='bold' fontSize='2rem'
        $textAlign='left' color='white'>Explore</Text>  

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

export default Navigator;