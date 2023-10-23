"use client"

import { useState, FC } from "react";

import { Text, Wrapper } from "./styles";
import LoginForm from "./login";
import RegisterForm from "./register";

interface Props {
  handleUserTerms: () => void;
}

const FormContainer: FC<Props> = ({handleUserTerms}) => {
  const [isRegister, setIsResgister] = useState(false);

  const handleRegisterClick = () => {
    setIsResgister(!isRegister);
  }

  return (
    <Wrapper className="z-1" $flexDirection="column" $justifyContent='center' $alignItems='center'>
      <Text h1 fontSize="2.8rem" fontFamily="Dic Sans">
        { (isRegister) ? "Seja bem vindo!" : "Bem vindo de novo!"}
      </Text>

      <Text className="orange mb-1 mb-md-4" role="button" fontFamily="Labrador B" color="#CCC" fontSize="1.2rem"
      onClick={handleRegisterClick}>
        { (isRegister) ? "Fazer Login" : " Primeira vez por aqui?"}
      </Text>

      { (isRegister) ? <RegisterForm handleCheckTerms={handleUserTerms}/> : <LoginForm /> }

    </Wrapper>
  )
}

export default FormContainer;