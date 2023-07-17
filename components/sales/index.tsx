import { FC } from 'react'
import { Wrapper, Text } from './styles'

const Sales: FC = () => {
  return (
    <Wrapper>
      <Wrapper $flexDirection='row' $alignItems='center'>
        <Text fontWeight={200} fontSize='2.5rem' fontStyle='normal' color='#AAAAAA'>
          Melhores <strong>Produtos</strong>
        </Text>
        <Wrapper $margin='auto 0 13px 15px' $alignItems='flex-end'>
          <Text color='#AAAAAA'><a><strong>Ver todos</strong></a></Text>
        </Wrapper>
      </Wrapper>
      
    </Wrapper>
  )
}

export default Sales;