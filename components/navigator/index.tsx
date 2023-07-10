import React, { FC } from 'react';

import { Wrapper, Text, NavWrapper, } from './styles'
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Navigator: FC = () => {
  return (
    <NavWrapper>
      <Wrapper $margin='2rem 0 0 3rem' $display='block'>
        <Text fontFamily='Dic Sans' fontWeight='bold' fontSize='2rem'
         textAlign='left' color='white'>Explore</Text>  
      </Wrapper>

      <Wrapper className='mb-2' $maxWidth='auto'>
        <Dropdown>
          <Dropdown.Toggle variant='secondary'>
            Categorias
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href='#/eletrica'>
              Elétrica
            </Dropdown.Item>
            <Dropdown.Item href='#/mecanica'>
              Mecânica
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Wrapper>
    </NavWrapper>
  )
}

export default Navigator;