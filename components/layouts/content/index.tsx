"use client"

import { ReactNode, useEffect, useState } from "react";
import jwt from 'jsonwebtoken';
import Cookies from "universal-cookie";
import { metaJWT, payloadUser } from "../../../types/auth";
import Topbar from "../topbar";
import IItem from "../../../types/item";
import ICategoria from "../../../types/categoria";
import Content from "./styles";
import Main, {Props as MainProps} from "../main";
import Sidebar from "../sidebar";
import { API_URL } from "../../../constants";

interface Props {
  withSidebar?: boolean;
  mainProps?: MainProps;
  tipos: ICategoria[];
  children: ReactNode;
}

export default function ({ mainProps, withSidebar, tipos, children }: Props) {
  const [currentX, setCurrentX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const [decodedToken, setDecodedToken] = useState<(metaJWT & payloadUser) | null>(null);
  const [items, setItems] = useState<IItem[]>([]);

  const cookies = new Cookies();

  const fetchItems = async () => {
    try {
      const res = await fetch(API_URL + "Mercadorias", {credentials: "include"});
      const data: IItem[] | undefined = await res.json();

      return data ?? [];
    } catch(e) {
      return [];
    }
  }

  useEffect(() => {
    const token = cookies.get("token");
    const decoded = jwt.decode(token || "", { json: true }) as unknown;
    setDecodedToken(decoded as (metaJWT & payloadUser) | null);

    fetchItems()
    .then((data) => {
      setItems(data);
    })
    .catch((err) => {
      setItems([]);
    });
  }, []);

  function changeBar() {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  }

  const handleTouchStart = () => (ev: TouchEvent) => {
    setStartX(ev.touches[0].clientX);
  }

  const handleTouchMove = () => (ev: TouchEvent) => {
    const deltaX = ev.touches[0].clientX - startX;
    if (isOpen && deltaX > 0) {
      return;
    } else if (!isOpen && deltaX > 160) {
      return setCurrentX(160);
    } else {
      setCurrentX(deltaX);
    }
  }

  const handleTouchEnd = () => (ev: TouchEvent) => {
    if (currentX >= 80) {
      setIsOpen(true);
    } else if (currentX <= -80) {
      setIsOpen(false);
    }

    setCurrentX(0);
  }

  return (
    <>
      <header>
        <Topbar changeBar={changeBar} searchOptions={items} userProps={decodedToken} />
      </header>

      <Content onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart}
      className={`main-content ${isOpen && withSidebar ? 'hidden' : ''}`}>
        {withSidebar ? <Sidebar $currentX={currentX} $isOpen={isOpen} cats={tipos}/> : undefined}
        <Main {...mainProps}>
          {children}
        </Main>
      </Content>
    </>
  )

};