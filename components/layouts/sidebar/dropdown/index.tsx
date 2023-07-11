import { FC } from 'react'

import { Dropdown as ItemDropdown, DropdownItem, DropdownMenu, DropdownToggle, Image } from './styles'
import catIcon from '../../../../public/images/category-tree-white.png'

const Dropdown: FC = () => {
  return (
    <ItemDropdown>
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
    </ItemDropdown>
  )
}

export default Dropdown;