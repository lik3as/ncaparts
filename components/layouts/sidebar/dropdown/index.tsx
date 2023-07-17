import { FC } from 'react'

import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from './styles'
import { Image } from '../styles'
import catIcon from '../../../../public/images/category-tree-white.png'

const ItemDropdown: FC = () => {

  return (
    <Dropdown>
      <DropdownToggle variant='secondary'>
        <Image src={catIcon.src}/>
        Categorias
      </DropdownToggle>

      <DropdownMenu>
        <DropdownItem>
          Elétrica
        </DropdownItem>
        <DropdownItem>
          Mecânica
        </DropdownItem>
        <DropdownItem>
          Hidráulica
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ItemDropdown;