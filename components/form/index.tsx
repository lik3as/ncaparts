import { useState, type FC, useEffect } from "react";

import { Text, Wrapper } from "./styles";
import LoginForm from "./login";
import RegisterForm from "./register";

const FormContainer: FC = () => {
  const [isRegister, setIsResgister] = useState(false);
  const [registerText, setRegisterText] = useState<"Fazer Login" | "Primeira vez por aqui?">("Primeira vez por aqui?");
  
  useEffect(() => {
    (isRegister) ? setRegisterText("Fazer Login") : setRegisterText("Primeira vez por aqui?");
  }, [isRegister]);

  const handleRegisterClick = () => {
    setIsResgister(!isRegister);
  }

  return (
    <Wrapper className="center-items" $flexDirection="column" $justifyContent='center' $alignItems='center'>
      <Text h1 fontSize="2.8rem" fontFamily="Dic Sans">
        Bem vindo de novo!
      </Text>

      <Text className="orange mb-1 mb-md-4" role="button" fontFamily="Labrador B" color="#CCC" fontSize="1.2rem"
      onClick={handleRegisterClick}>
        {registerText}
      </Text>

      { (isRegister) ? <RegisterForm /> : <LoginForm /> }

    </Wrapper>
  )
}

export default FormContainer;