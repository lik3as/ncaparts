import { useEffect, useState } from "react";

export default () => {
  const [width, setWidth] = useState(768);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
    }

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [])

  return width;
}