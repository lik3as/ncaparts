import { type FC } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { InputGroup, Row, Form, Button } from 'react-bootstrap'

import { Text, Col, FormControl } from '../styles';

const LoginForm: FC = () => {
  return (
      <Form className='px-2 px-sm-0'>

        <Form.Group as={Row} className="mb-2 ps-5 ps-sm-0" controlId="loginFormEmail">
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

        <Form.Group as={Row} className="mb-0 ps-5 ps-sm-0 mb-4" controlId="loginFormPasswd">
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

        <Text color='#bbb' className='clickable mb-3' fontSize='.9rem'>
          Esqueceu a sua senha?
        </Text>

      </Form>
      
  )
}

export default LoginForm;