import { FC } from "react";

import { Button } from "../styles";
import { Image } from "../styles";
import { Wrapper } from "../../styles";
import sales from "../../../../public/images/sales.png";
import market from "../../../../public/images/market.png";
import truck from "../../../../public/images/truck.png";
import blog from "../../../../public/images/book.png";

const Menu: FC = () => {
  return (
    <Wrapper $display="flex" $flexDirection="column" $alignItems="flex-start" $justifyContent="space-between">
      <Button variant="secondary">
        <Image src={sales.src}/>
        Melhores Ofertas
      </Button>
      <Button variant="secondary">
        <Image src={market.src}/>
        Seja um Revendedor
      </Button>
      <Button variant="secondary">
        <Image src={truck.src}/>
        Acompanhar Pedido
      </Button>
      <Button variant="secondary">
        <Image src={blog.src}/>
        Blog 
      </Button>
    </Wrapper>
  )
}

export default Menu;