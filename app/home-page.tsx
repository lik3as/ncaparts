"use client";

import { FC, useState, TouchEvent, StrictMode, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

import Topbar from '../components/layouts/topbar';
import Sidebar from '../components/layouts/sidebar'
import Sales from '../components/sales';
import Global from '../styles/global';
import GlobalThemes from '../styles/themes'
import Landing from '../components/landing';
import Main from '../components/layouts/main';
import Content from '../components/layouts/content';
import IItem from '../types/item'
import ICategoria from '../types/categoria';
import type { metaJWT, payloadUser } from '../types/auth';

interface Props {
  items: IItem[]
  tipos: ICategoria[];
}

const HomePage: FC<Props> = ({items, tipos}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentX, setCurrentX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [decodedToken, setDecodedToken] = useState<(metaJWT & payloadUser) | null>(null);

  const cookies = new Cookies();
  
  useEffect(() => {
    const token = cookies.get("token");
    const decoded = jwt.decode(token || "", { json: true }) as unknown;
    setDecodedToken(decoded as (metaJWT & payloadUser) | null);

  }, []);

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
        <Topbar changeBar={changeBar} searchOptions={items} userProps={ decodedToken }/>
      </header>

      <Content onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart}
      className={`main-content ${isOpen ? 'hidden' : ''}`}>

        <Sidebar $isOpen={isOpen} $currentX={currentX} cats={tipos}/>

        <Main>
          <Landing />
          <Sales items={items}/>
        </Main>
      </Content>

    </StrictMode>
  )
};

export default HomePage;