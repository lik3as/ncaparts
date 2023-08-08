import type { FC } from "react";
import { Text, Wrapper } from "./styles";
import LoginForm from "./login";

const FormContainer: FC = () => {
  return (
    <Wrapper className="center-items" $flexDirection="column" $justifyContent='center' $alignItems='center'>
      <Text h1 fontSize="2.8rem" fontFamily="Dic Sans">
        Bem vindo de novo!
      </Text>
      <Text className="clickable orange" fontFamily="Labrador B" color="#CCC" fontSize="1.2rem">
        Primeira vez por aqui?
      </Text>
      <LoginForm />
    </Wrapper>
  )
}

export default FormContainer;