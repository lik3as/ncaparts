"use client"

import { FC, useState } from "react";

import { Form } from "./styles";
import Button from "../../helpers/ItemButton";
import Input from "./input";
import IFabricante from "../../../types/fabricante";
import { track } from "@vercel/analytics";

interface Props {
  fabProduto: IFabricante;
  skuProduto: string;
  nomeProduto: string;
}

const ItemForm: FC<Props> = ({fabProduto, nomeProduto, skuProduto}) => {
  const [buyCount, setBuyCount] = useState(1);

  const changeCounter: (action: 'increase' | 'decrease') => () => void = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      return  () => setBuyCount(buyCount + 1);
    } else {
      return () => (buyCount > 1) ? setBuyCount(buyCount - 1) : void(0);
    }
  }

  let marca = (fabProduto) ? fabProduto.nome : "CHASING";
  let num = '+554789021538'
  let text = `Gostaria de adquirir ${buyCount} unidades do produto ${nomeProduto} (${skuProduto})`;

  switch(marca) {
    case("CHASING"): {
      num = '+554789021538';
      break;
    }
    case("DJI"): {
      num = '+554789021538';
      break;
    }
    default: {
      num = '+554789021538';
      break;
    }
  }
  
  return (
    <Form onSubmit={(e) => {
      track("Purchase", {productName: nomeProduto, productSku: skuProduto});
      e.preventDefault();
    }}>
      <Input clickHandler={changeCounter} buyCount={buyCount}/>
      <Button className="me-2 me-sm-2 w-50 ms-xs-5 ms-2" variant="primary" type="submit" href={`https://wa.me/${num}?text=${text}`} target="_blank">Comprar</Button>
    </Form>
  )
}

export default ItemForm;