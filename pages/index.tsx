import { FC, useState, TouchEvent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Topbar from '../components/layouts/topbar';
import Sidebar from '../components/layouts/sidebar'
import Global from '../styles/global';
import GlobalThemes from '../styles/themes'

const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleTouchStart = (event: TouchEvent) =>  {
    setStartX(event.touches[0].clientX);
    console.log("startx")
  }

  const handleTouchMove = (event: TouchEvent) => {
    const deltaX = event.touches[0].clientX - startX
    setCurrentX(deltaX);
    console.log("movex")
  }

  const handleTouchEnd = (event: TouchEvent) => {
    if (currentX > 100) {
      setIsOpen(true);
    } else if (currentX < -100) {
      setIsOpen(false);
    }

    console.log("endx")
    setCurrentX(0);
  }

  return (
    <>
      <Global />
      <GlobalThemes />

      <header>
        <Topbar />
      </header>

      <main onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}>
        <Sidebar  $isOpen={isOpen}/>

      </main>
    </>
  )
};

export default Home;