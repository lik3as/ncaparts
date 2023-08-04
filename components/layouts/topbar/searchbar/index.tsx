import React, { FC, useState } from 'react'

import {
  AutocompleteSearch
} from './styles'
import IItem from '../../../../types/item';
import { useRouter } from 'next/router';
import useWindowResize from '../../../../hooks/useWindowResize';


interface Props {
  options: IItem[] | null
}

const Searchbar: FC<Props> = ({options}) => {
  const router = useRouter();
  const isMobile = useWindowResize() < 768;

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
      fuseOptions={ { keys: ["sku", "name"] } }
      resultStringKeyName='sku'
      formatResult={ (isMobile) ? FormatResultSku : FormatResult}
      styling={ (isMobile) ? {
        height: '30px',
        fontSize: '.9rem',
        searchIconMargin: '2px 0px 2px 6px',
        clearIconMargin: '2px 6px 0px 0px'
      } : {height: '35px', fontSize: '1rem'} }
    />
  )
}

const FormatResult: FC<{name: string, sku: string}> = ({name, sku}) => {
  return (
    <>
      <span style={{ display: 'block', textAlign: 'left' }}> { sku + ` (${name})`} </span>
    </>
  )
}

const FormatResultSku: FC<{sku: string}> = ({sku}) => {
  return (
    <>
      <span style={{ display: 'block', textAlign: 'left' }}> { sku } </span>
    </>
  )
}

export default Searchbar;