import { FC, useState, TouchEvent, StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Topbar from '../components/layouts/topbar';
import Sidebar from '../components/layouts/sidebar'
import Sales from '../components/sales';
import Global from '../styles/global';
import GlobalThemes from '../styles/themes'
import Landing from '../components/landing';
import Main from '../components/layouts/main';
import Content from '../components/layouts/content';
import IItem from '../types/item'
import axios from 'axios';

interface Props {
  items: IItem[]
}

const Home: FC<Props> = ({items}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentX, setCurrentX] = useState(0);
  const [startX, setStartX] = useState(0);

  function handleTouchStart (ev: TouchEvent) {
    setStartX(ev.touches[0].clientX);
  }

  function handleTouchMove (ev: TouchEvent) {
    const deltaX = ev.touches[0].clientX - startX;
    if (isOpen && deltaX > 0) {
      return;
    } else if (!isOpen && deltaX > 160) {
      return setCurrentX(160);
    } else {
      setCurrentX(deltaX);
    }
  }

  function handleTouchEnd () {
    if (currentX >= 80) {
      setIsOpen(true);
    } else if (currentX <= -80) {
      setIsOpen(false);
    }

    setCurrentX(0);
  }

  function changeBar() {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  }

  return (
    <StrictMode>
      <Global />
      <GlobalThemes />

      <header>
        <Topbar changeBar={changeBar}/>
      </header>

      <Content onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart}
       className={`main-content ${isOpen ? 'hidden' : ''}`}>

        <Sidebar $isOpen={isOpen} $currentX={currentX}/>

        <Main $width={null} $overflowY={null}>
          <Landing />
          <Sales items={items} innerTitle={null}/>
        </Main>
      </Content>

    </StrictMode>
  )
};

export async function getStaticProps() {
  const items = (await axios("http://localhost:8080/Mercadorias")).data;

  return {
    props: {
      items,
    },
  }
}

export default Home;