import React, { FC } from 'react';

import { Wrapper, Text, NavWrapper,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from './styles'

const Navigator: FC = () => {
  return (
    <NavWrapper>
      <Text fontFamily='Dic Sans' fontWeight='bold' fontSize='2rem'
        $textAlign='left' color='white'>Explore</Text>  

      <Wrapper className='mb-2' $maxWidth='auto' $margin='1.5rem 0'>
        <Dropdown>
          <DropdownToggle variant='secondary'>
            Categorias
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem href='#/eletrica'>
              Elétrica
            </DropdownItem>
            <DropdownItem href='#/mecanica'>
              Mecânica
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Wrapper>

      <Wrapper></Wrapper>
    </NavWrapper>
  )
}

export default Navigator;