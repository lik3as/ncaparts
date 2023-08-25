import { FC } from "react";
import ItemImage from "./styles";
import axios from "axios";
import IProduct from "../../types/product";

interface Props {
  product: IProduct;
}

const Image: FC<Props> = ({ product }) => {
  let imgSrc = product.imagens[0];

  try {
    axios.get(imgSrc).then((response) => {
      if (response) imgSrc = response.data;
      else imgSrc = '/images/logos/logo-white.png';
    })
  } catch (e) {
    throw e;
  }

  return <ItemImage src={imgSrc} alt={product.desc || product.nome + ' | ' + product.sku}/>
}

export default Image;