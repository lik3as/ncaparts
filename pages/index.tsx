import { FC, useState, TouchEvent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Topbar from '../components/layouts/topbar';
import Sidebar from '../components/layouts/sidebar'
import Global from '../styles/global';
import GlobalThemes from '../styles/themes'

const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentX, setCurrentX] = useState(0);
  const [startX, setStartX] = useState(0);

  function handleTouchStart (ev: TouchEvent) {
    setStartX(ev.touches[0].clientX);
  }

  function handleTouchMove (ev: TouchEvent) {
    const deltaX = ev.touches[0].clientX - startX;
    setCurrentX(deltaX);
  }

  function handleTouchEnd () {
    if (currentX > 60) {
      setIsOpen(true);
    } else if (currentX < -60) {
      setIsOpen(false);
    }

    setCurrentX(0);
  }

  return (
    <>
      <Global />
      <GlobalThemes />

      <header>
        <Topbar />
      </header>

      <Sidebar $isOpen={isOpen} $currentX={currentX}/>
      <main onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart}>
        
      </main>
    </>
  )
};

export default Home;