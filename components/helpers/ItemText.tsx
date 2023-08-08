import React, { FC, ReactNode } from 'react'

interface Props {
  className?: string;
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: string;
  fontStyle?: string;
  color?: string;
  children?: ReactNode;
  h1?: boolean;
  role?: string;
  onClick?: () => void;
  $textAlign?: string;
};

const ItemText: FC<Props> = ({className, children, h1, role = '', onClick}) => {
  if (h1) {
    return (
      <h1 className={className} onClick={onClick} role={role}>{children}</h1>
    )
  }
  return (
    <div className={className} onClick={onClick} role={role}>{children}</div>
  )
}

export default ItemText;