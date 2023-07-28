import React, { FC, ReactNode } from 'react'

interface Props {
  h1?: boolean;
  className?: string;
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: string;
  fontStyle?: string;
  color?: string;
  children?: ReactNode;
  $textAlign?: string;
};

const ItemText: FC<Props> = ({className, children, h1}) => {
  if (h1) {
    return (
      <h1 className={className}>{children}</h1>
    )
  }
  return (
    <div className={className}>{children}</div>
  )
}

export default ItemText;