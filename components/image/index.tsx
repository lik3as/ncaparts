"use client"

import { FC } from "react";
import IProduct from "../../types/product";
import useImageUrl from "../../hooks/useImageUrl";
import Image from "./styles";

interface Props {
  product: IProduct;
  className?: string;
  width: number;
  height: number;
}

const ItemImage: FC<Props> = ({ product, width, height, className }) => {
  const logoUrl = '/images/logos/logo-white.png';
  const productImageUrl = product.imagens[0];
  const resizedProductImageUrl = `${productImageUrl}?tr=w-${width},h-${height}`;

  const imgUrl = useImageUrl(resizedProductImageUrl, logoUrl);
  
  return <Image src={imgUrl} alt={product.desc || product.nome + ' | ' + product.sku} width={width} height={height} className={className} />
}

export default ItemImage;