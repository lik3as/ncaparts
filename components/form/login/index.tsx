import { type FC } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { Form, Button } from 'react-bootstrap'

import { Text } from '../styles';
import FormItem from '../group';

const LoginForm: FC = () => {
  return (
      <Form className='w-100'>

        <FormItem InputIcon={FaUser} controlId='loginFormEmail' className='mb-2'
        inputPHolder='Digite o seu e-mail'
        inputType='email'
        labelText='Email'
        />

        <FormItem InputIcon={FaLock} controlId='loginFormPasswd' className='mb-3'
        inputPHolder='Digite a sua senha'
        inputType='password'
        labelText='Senha'
        />

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