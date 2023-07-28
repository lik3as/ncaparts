import React, { FC, useState } from 'react'

import { InputGroup as ItemInputGroup, Button, FormControl } from './styles'

const InputGroup: FC = () => {
  const [searchText, setSearchText] = useState('');

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  return (
    <ItemInputGroup>
      <FormControl value={searchText} onChange={handleChangeInput}
        placeholder="Nome ou SKU do produto"
        aria-label="O que você está buscando?"
        aria-describedby="basic-addon1"
      />
      <Button variant='outline-secondary' href={`/produtos/${searchText}`}>Buscar</Button>
    </ItemInputGroup>
  )
}

export default InputGroup;