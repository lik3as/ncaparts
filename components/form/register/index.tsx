import { type FC } from "react";
import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Button, Form, InputGroup, Row } from "react-bootstrap";

import {
  Col,
  FormControl,
  Text,
  Wrapper
} from "../styles";
import FormItem from "../group";

const RegisterForm: FC = () => {
  return (
    <Form className="px-2 px-sm-0 w-100">

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

      <Button className='mb-1 w-100 me-5 mx-sm-0'>
        Entrar
      </Button>

    </Form>
  )
}

export default RegisterForm;