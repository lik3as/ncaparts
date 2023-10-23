"use client"

import { useState, FC, FormEvent } from "react";
import { FaUser, FaLock } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Form } from "react-bootstrap";
import Button from "../../helpers/ItemButton";

import FormItem from "../group";
import axios from "axios";
import IUser from "../../../types/user";

interface Props {
  handleCheckTerms: () => void;
}

const RegisterForm: FC<Props> = ({handleCheckTerms}) => {
  const userTerms =
  <>&nbsp;&nbsp;{"Li e aceito os"}<strong role="button" onClick={handleCheckTerms}>{"\b termos de uso"}</strong></>;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isTermAccepted, setIsTermAccepted] = useState(false);

  const [validated, setValidated] = useState(false);

  const handleOnSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    const form = ev.currentTarget;

    ev.preventDefault();

    if (form.checkValidity() === false) {
      ev.stopPropagation();
      setValidated(true);
    } else {
      setValidated(true);
      axios.post('http://localhost:8080/' + "auth/User", {
        email: email,
        username: username,
        passwd: password
      }, { withCredentials: true }).then((v) => {
        axios.post('http://localhost:8080/' + "Clientes", {
          nome: username,
          senha: password,
          email: email,
          revendedor: true
        } as IUser, { withCredentials: true });
      });
      
    }
  }

  return (
    <Form style={{width: "105%"}} noValidate validated={validated} onSubmit={handleOnSubmit}> {/** 105 because the form title isn't long enought*/}
      <FormItem InputIcon={FaUser} controlId="registerFormUser" className="mb-2"
      inputPHolder="Digite o seu nome de usuário"
      inputType="text"
      labelText="Usuário"
      captureInput={(ev) => setUsername(ev.target.value.trim())}
      required
      />

      <FormItem InputIcon={MdEmail} controlId="registerFormEmail" className="mb-2"
      inputPHolder="Digite o seu e-mail"
      inputType="email"
      labelText="Email"
      captureInput={(ev) => setEmail(ev.target.value.trim())}
      required
      />

      <FormItem InputIcon={FaLock} controlId="registerFormPasswd" className="mb-4"
      inputPHolder="Digite a sua senha"
      inputType="password"
      labelText="Senha"
      captureInput={(ev) => setPassword(ev.target.value.trim())}
      required
      />

      <Form.Check label={userTerms} className="mb-1 d-flex justify-content-center" onChange={() => setIsTermAccepted(!isTermAccepted)}
      required/>

      <Button variant="primary" className='mb-1 w-100 me-5 mx-sm-0' type="submit">
        Registrar
      </Button>
    </Form>
  )
}

export default RegisterForm;