"use client"

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

  axios.get(imgSrc)
  .catch((e) => void(0))
  .then((response) => {
    if (response) imgSrc = imgSrc; /**Do nothing .*/
    else {
      imgSrc = logo;
    }
  });
  
  return <ItemImage src={imgSrc} alt={product.desc || product.nome + ' | ' + product.sku}/>
}

export default Image;