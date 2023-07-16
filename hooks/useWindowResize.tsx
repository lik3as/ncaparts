import { useEffect, useState } from "react";

export default function useWindowResize() {
    const [width, setWidth] = useState(0);

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