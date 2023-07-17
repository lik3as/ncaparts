import { FC } from 'react'
import { Wrapper, Text } from './styles'

const Sales: FC = () => {
  return (
    <Wrapper>
      <Text fontWeight={200} fontSize='2.5rem' fontStyle='normal'>
        Melhores <strong>Produtos</strong>
      </Text>

    </Wrapper>
  )
}

export default Sales;