import { FC } from "react";

import { Button } from "./styles";
import { Wrapper } from "../styles";

const Menu: FC = () => {
  return (
    <Wrapper $display="flex" $flexDirection="column" $alignItems="flex-start" $justifyContent="space-between">
      <Button variant="secondary">
        A
      </Button>
      <Button variant="secondary">
        B
      </Button>
      <Button variant="secondary">
        C
      </Button>
    </Wrapper>
  )
}

export default Menu;