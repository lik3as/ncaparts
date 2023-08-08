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

const RegisterForm: FC = () => {
  return (
    <Form className="px-2 px-sm-0">

      <Form.Group as={Row} controlId="registerFormUsername" className="mb-2">
        <Form.Label column sm="2">
          Usuário
        </Form.Label>
        <Col sm="10">
          <InputGroup>

            <InputGroup.Text>
              <MdEmail />
            </InputGroup.Text>

            <FormControl type="text" placeholder="Digite o seu nome de Usuário"/>

          </InputGroup>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="registerFormEmail" className="mb-2">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <InputGroup>

            <InputGroup.Text>
              <FaUser />
            </InputGroup.Text>

            <FormControl type="email" placeholder="Digite o seu e-mail"/>

          </InputGroup>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="registerFormPasswd" className="mb-4">
        <Form.Label column sm="2">
          Senha
        </Form.Label>
        <Col sm="10">
          <InputGroup>
          
            <InputGroup.Text>
              <FaLock />
            </InputGroup.Text>

            <FormControl type="password" placeholder="Digite a sua senha"/>
            
          </InputGroup> 

        </Col>
      </Form.Group>

      <Button className='mb-1 w-100 me-5 mx-sm-0'>
        Entrar
      </Button>

    </Form>
  )
}

export default RegisterForm;