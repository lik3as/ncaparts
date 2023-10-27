"use client"

import { FC, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { Wrapper, Text } from './styles';
import List from './list';
import IItem from '../../types/item'
import { usePathname, useRouter } from 'next/navigation';
import { SALES_LIST_LIMIT } from '../../constants';

interface Props {
  items: IItem[],
  innerTitle?: JSX.Element | null,
  page: number;
}

const Sales: FC<Props> = ({items, innerTitle, page}) => {
  let defaultTitle = <>Melhores <strong>Produtos</strong></>
  const router = useRouter();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(page);

  if (!innerTitle) {
    innerTitle = defaultTitle;
  }

  const handleNextClick = () => {
    if (pathname === '/' || pathname.includes("produtos") || (items.length  < SALES_LIST_LIMIT)) return;
    router.push(`${pathname}?page=${currentPage + 1}`);
    setCurrentPage(currentPage + 1);
  }

  const handleBackClick = () => {
    if (pathname === '/' || pathname.includes("produtos") || page == 0) return;
    router.push(`${pathname}?page=${currentPage + -1}`);
    setCurrentPage(currentPage - 1);
  }

  return (
    <Wrapper $justifyContent='flex-start' $margin='auto 0 0 0'>
      <Wrapper $flexDirection='row' $justifyContent='space-between' $alignItems='center' $minWidth='98%'>
        <Text fontWeight={200} fontSize='2.5rem' fontStyle='normal' color='#AAAAAA'>
          {innerTitle}
        </Text>
        <Wrapper $margin='auto 0 13px 15px' $alignItems='flex-end' $display={(innerTitle == defaultTitle) ? "flex" : "none"}>
          <Text color='#AAAAAA'><a><strong>Ver todos</strong></a></Text>
        </Wrapper>

        <Wrapper $flexDirection='row' $margin='0 0px 0 auto' $alignItems='center' $justifyContent='center'>
          <Text className='page-box'>{currentPage}</Text>
          <AiOutlineArrowLeft color='white' size={"1.5rem"} onClick={handleBackClick} className='me-1' role='button'/>
          <AiOutlineArrowRight color='white' size={"1.5rem"} onClick={handleNextClick} role='button'/>
        </Wrapper>

      </Wrapper>
      
      {
        (!!items.length)
        ? <List items={items}/> 
        : <Text fontSize='2.5rem' className='my-5' color='#CCC'>Não achamos nenhum item por aqui</Text>
      }
    </Wrapper>
  )
}

export default Sales;