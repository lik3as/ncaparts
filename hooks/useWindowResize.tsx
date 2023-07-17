import { useEffect, useState } from "react";

export default function useWindowResize() {
  let initialWSize: number = 768;
  /**? -> It's like an 'use client' for accessing the browser variables. */
  if (typeof window !== "undefined") {
    initialWSize = window.innerWidth;
  }

  const [width, setWidth] = useState(initialWSize);

  useEffect(() => {
    function handleWindowResize() {
        setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
        window.removeEventListener('resize', handleWindowResize);
    }
  }, [])

  return width;
}