"use client"
import { FC, useState } from "react";

import { Form, Button } from "./styles";
import Input from "./input";
import IFabricante from "../../../types/fabricante";

interface Props {
  fabProduto: IFabricante;
  skuProduto: string;
  nomeProduto: string;
}

const ItemForm: FC<Props> = ({fabProduto, nomeProduto, skuProduto}) => {
  const [buyCount, setBuyCount] = useState(1);

  const clickHandler: (action: 'increase' | 'decrease') => () => void = (action: 'increase' | 'decrease') => {
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
    <Form>
      <Input clickHandler={clickHandler} buyCount={buyCount}/>
      <Button type="submit" href={`https://wa.me/${num}?text=${text}`} target="_blank"> Comprar </Button>
    </Form>
  )
}

export default ItemForm;