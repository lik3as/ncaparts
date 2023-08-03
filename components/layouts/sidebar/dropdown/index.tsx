import { FC } from 'react'

import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from './styles'
import { Image } from '../styles'
import catIcon from '../../../../public/images/category-tree-white.png'
import ICategoria from '../../../../types/categoria'
import Link from 'next/link'

interface Props {
  cats: ICategoria[]
}

const ItemDropdown: FC<Props> = ({cats}) => {

  return (
    <Dropdown>
      <DropdownToggle variant='secondary'>
        <Image src={catIcon.src}/>
        Categorias
      </DropdownToggle>

      <DropdownMenu>
        {cats.map((cat, i) => (
            <DropdownItem as={Link} className="dropdown-item" href={`/tipos/${cat.nome}/0`} key={i}>
              {cat.nome}
            </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}


export default ItemDropdown;