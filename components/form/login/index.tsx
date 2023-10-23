"use client"

import { useState, FC } from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { Form } from 'react-bootstrap'
import Button from '../../helpers/ItemButton';

import { Text } from '../styles';
import FormItem from '../group';

const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
      <Form className='w-100' validated={false}>

        <FormItem InputIcon={FaUser} controlId='loginFormEmail' className='mb-2'
        inputPHolder='Digite o seu e-mail'
        inputType='email'
        labelText='Email'
        captureInput={(ev) => setEmail(ev.target.value)}
        required
        />

        <FormItem InputIcon={FaLock} controlId='loginFormPasswd' className='mb-3'
        inputPHolder='Digite a sua senha'
        inputType='password'
        labelText='Senha'
        captureInput={(ev) => setPasswd(ev.target.value)}
        required
        />

        <Button variant="primary" className='mb-1 w-100 me-5 mx-sm-0' type='submit'>
          Entrar
        </Button>

        <Text color='#bbb' className='clickable mb-3' fontSize='.9rem'>
          Esqueceu a sua senha?
        </Text>

      </Form>
      
  )
}

export default LoginForm;