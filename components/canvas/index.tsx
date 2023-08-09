import { useState, type FC } from "react"

import { Wrapper, Text } from "./styles";
import Gears from "./gears";
import Terms from "./terms";

interface Props {
  shouldRenderTerms: boolean;
}

const Canvas: FC<Props> = ({shouldRenderTerms}) => {

  return (
    <>
      <Wrapper $flexDirection="column" className={ (shouldRenderTerms) ? "translate-up" : ""}>
        <Gears />

        <Text fontFamily="Labrador B" fontSize="1.2rem" className="slogan">
          {(shouldRenderTerms) ? "Termos de uso e concessão" : "Deixe as peças trabalharem."}
        </Text>
      </Wrapper>

      <Terms visible={(shouldRenderTerms) ? true : false}/>
    </>
  )
}

export default Canvas;