import React, { FC, ReactNode } from 'react'

interface Props {
  className?: string;
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: string;
  fontStyle?: string;
  color?: string;
  children?: ReactNode;
  $textAlign?: string;
};

const ItemText: FC<Props> = ({className, children}) => (
  <div className={className}>{children}</div>
);

export default ItemText;