import React, { FC } from 'react';

import { Wrapper, Text, NavWrapper } from './styles'
import Dropdown from './dropdown/'

const Navigator: FC = () => {
  return (
    <NavWrapper>
      <Text fontFamily='Dic Sans' fontWeight='bold' fontSize='2rem'
        $textAlign='left' color='white'>Explore</Text>  

      <Wrapper className='mb-2' $maxWidth='auto' $margin='1.5rem 0'>
        <Dropdown />
      </Wrapper>

      <Wrapper></Wrapper>
    </NavWrapper>
  )
}

export default Navigator;