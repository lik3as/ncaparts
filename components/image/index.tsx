import { FC } from "react";
import ItemImage from "./styles";
import axios from "axios";
import IProduct from "../../types/product";

interface Props {
  product: IProduct;
}

const Image: FC<Props> = ({ product }) => {
  let imgSrc = product.imagens[0];
  const logo = '/images/logos/logo-white.png';

  if (imgSrc) {
    try {
      axios.get(imgSrc).then((response) => {
        if (response) imgSrc = imgSrc; /**Do nothing .*/
        else console.log("Response is undefined");
      });

    } catch (e) {
      console.log("URL Without image: " + imgSrc)
      imgSrc = logo;
    }
  } else imgSrc = logo;

  return <ItemImage src={imgSrc} alt={product.desc || product.nome + ' | ' + product.sku}/>
}

export default Image;