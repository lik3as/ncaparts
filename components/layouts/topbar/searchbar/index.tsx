import { FC } from 'react'

import { InputGroup as ItemInputGroup, Button, FormControl } from './styles'

const InputGroup: FC = () => {
  return (
    <ItemInputGroup>
      <FormControl
        placeholder="Nome ou SKU do produto"
        aria-label="O que você está buscando?"
        aria-describedby="basic-addon1"
      />
      <Button variant='outline-secondary'>Buscar</Button>
    </ItemInputGroup>
  )
}

export default InputGroup;