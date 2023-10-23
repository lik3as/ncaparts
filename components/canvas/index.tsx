import { FC } from "react"

import { Wrapper, Text } from "./styles";
import Gears from "./gears";
import Terms from "./terms";
import useWindowResize from "../../hooks/useWindowResize";

interface Props {
  shouldRenderTerms: boolean;
}

const Canvas: FC<Props> = ({shouldRenderTerms}) => {
  const isMobile = useWindowResize() < 768;
  const shouldTranslateUp = (shouldRenderTerms) && !isMobile;

  return (
    <>
      <Wrapper $flexDirection="column" className={ `slogan-container ${(shouldTranslateUp) ? "translate-up" : ""}`}>
        <Gears isWhiteGears={(isMobile)}/>

        <Text fontFamily="Labrador B" fontSize="1.2rem" className="slogan">
          {(shouldRenderTerms) ? "Termos de uso e concessão" : "Deixe as peças trabalharem."}
        </Text>
      </Wrapper>

      <Terms visible={(shouldRenderTerms) ? true : false}/>
    </>
  )
}

export default Canvas;