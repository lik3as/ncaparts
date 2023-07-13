import { FC, useState, TouchEvent } from 'react';

import { Wrapper, Text, NavWrapper, Divisor } from './styles';
import Dropdown from './dropdown/';
import Menu from './menu';
import Manage from './manage'


const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleTouchStart = (event: TouchEvent) =>  {
    setStartX(event.touches[0].clientX);
  }

  const handleTouchMove = (event: TouchEvent) => {
    const deltaX = event.touches[0].clientX - startX
    setCurrentX(deltaX);
  }

  const handleTouchEnd = () => {
    if (currentX > 100) {
      setIsOpen(true);
    } else if (currentX < -100) {
      setIsOpen(false);
    }

    setCurrentX(0);
  }

  return (
    <NavWrapper onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove} className={`sidebar ${isOpen ? 'open' : ''}`}>

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

export default Sidebar;