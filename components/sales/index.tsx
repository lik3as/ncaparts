import { FC } from 'react';
import { Wrapper, Text } from './styles';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

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
      
      <SwipeableViews enableMouseEvents={true} autoPlay={true}>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          T40
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          T30
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          T25
        </div>
      </SwipeableViews>
    </Wrapper>
  )
}

export default Sales;