import { useEffect, useState } from "react";

export default (url: string | undefined, replacerUrl: string) => {
  if (!url)
  return replacerUrl;

  const [imageUrl, setImageUrl] = useState(url);

  useEffect(() => {
    try {
      const imageUrl = new URL(url); //Throw an error if it's an invalid URL

      const fetchStatus = async () => {
        try {
          const res = await fetch(imageUrl, {cache: "no-store"});
          res.ok ? setImageUrl(imageUrl.toString()) : setImageUrl(replacerUrl);
        } catch(e) {
          setImageUrl(replacerUrl)
        }
      }

      fetchStatus();
    } catch (e) {
      setImageUrl(replacerUrl)
    }
  }, [url])

  return imageUrl;
}