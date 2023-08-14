import { useEffect, useState } from "react";
import cookies from "@boiseitguru/cookie-cutter";

export default function useCookie(name: string) {
  const [cookie, setCookie]: any = useState("");

  useEffect(() => {
    setCookie(cookies.get(name));
  }, []);

  return cookie;
}