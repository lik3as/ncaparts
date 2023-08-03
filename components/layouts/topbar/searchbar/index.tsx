import React, { FC, useState } from 'react'

import {
  AutocompleteSearch
} from './styles'
import IItem from '../../../../types/item';
import { useRouter } from 'next/router';


interface Props {
  options: IItem[] | null
}

const Searchbar: FC<Props> = ({options}) => {
  const router = useRouter();
 if (!options) {
    options = []
  }
  
  const items = options!.map((opt) => ({
    id: opt.id,
    name: opt.produto.nome,
    sku: opt.produto.sku
  }))

  const handleSelect = (item: unknown) => {
    router.replace("/produtos/" + (item as any).sku);
  }

  return (
    <AutocompleteSearch
      items={items}
      onSelect={handleSelect}
      fuseOptions={ {keys: ["sku", "name"]} }
      resultStringKeyName='sku'
      formatResult={formatResult}
    />
  )
}

const formatResult: FC<{name: string, sku: string}> = ({name, sku}) => {
  return (
    <>
      <span style={{ display: 'block', textAlign: 'left' }}>{sku + ` (${name})`}</span>
    </>
  )
}

export default Searchbar;