import React, { FC, useState } from 'react'

import { InputGroup as ItemInputGroup, Button, FormControl } from './styles'

const InputGroup: FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const button = document.querySelector('#search') as HTMLButtonElement;
      if (button) {
        button.click();
      }

    }
  };

  return (
    <ItemInputGroup>
      <FormControl value={searchText} onChange={handleChangeInput} onKeyDown={handleKeyPress}
        placeholder="Nome ou SKU do produto"
        aria-label="O que você está buscando?"
        aria-describedby="basic-addon1"

      />
      <Button id='search' variant='outline-secondary' href={`/produtos/${searchText}`}>Buscar</Button>
    </ItemInputGroup>
  )
}

export default InputGroup;