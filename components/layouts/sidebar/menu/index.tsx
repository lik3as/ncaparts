import { FC } from "react";

import { Button } from "./styles";
import { Wrapper } from "../styles";

const Menu: FC = () => {
  return (
    <Wrapper $display="flex" $flexDirection="column" $alignItems="flex-start" $justifyContent="space-between">
      <Button>
        A
      </Button>
      <Button>
        B
      </Button>
      <Button>
        C
      </Button>
    </Wrapper>
  )
}

export default Menu;