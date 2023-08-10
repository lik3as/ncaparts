import { type FC } from "react";
import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Button, Form } from "react-bootstrap";

import FormItem from "../group";

interface Props {
  handleCheckTerms: () => void;
}

const RegisterForm: FC<Props> = ({handleCheckTerms}) => {
  const userTerms =
  <>&nbsp;&nbsp;{"Li e aceito os"}<strong role="button" onClick={handleCheckTerms}>{"\b termos de uso"}</strong></>;


  return (
    <Form className="w-100">

      <FormItem InputIcon={FaUser} controlId="registerFormUser" className="mb-2"
      inputPHolder="Digite o seu nome de usuário"
      inputType="text"
      labelText="Usuário"
      />

      <FormItem InputIcon={MdEmail} controlId="registerFormEmail" className="mb-2"
      inputPHolder="Digite o seu e-mail"
      inputType="email"
      labelText="Email"
      />

      <FormItem InputIcon={FaLock} controlId="registerFormPasswd" className="mb-4"
      inputPHolder="Digite a sua senha"
      inputType="password"
      labelText="Senha"
      />

      <Form.Check label={userTerms} className="mb-1 d-flex justify-content-center"/>

      <Button className='mb-1 w-100 me-5 mx-sm-0'>
        Registrar
      </Button>
    </Form>
  )
}

export default RegisterForm;