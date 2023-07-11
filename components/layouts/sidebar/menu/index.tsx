import { FC } from "react";

import { Button } from "./styles";
import { Wrapper } from "../styles";

const Menu: FC = () => {
  return (
    <Wrapper $display="flex" $flexDirection="column" $alignItems="flex-start" $justifyContent="space-between">
      <Button variant="secondary">
        Melhores Ofertas
      </Button>
      <Button variant="secondary">
        Seja um Revendedor
      </Button>
      <Button variant="secondary">
        Acompanhar Pedido
      </Button>
      <Button variant="secondary">
        Blog 
      </Button>
    </Wrapper>
  )
}

export default Menu;