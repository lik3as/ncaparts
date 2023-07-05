import React, { FC, ReactNode } from 'react'

interface Props {
  className?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  children?: ReactNode;
  textAlign?: string;
}

const ItemText: FC<Props> = ({children}) => (
  <div className=''>{children}</div>
)