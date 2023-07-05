import React, { FC, ReactNode } from 'react'

interface Props {
  display?: string;
  className?: string;
  flexDirection?: string;
  alignItems?: string; 
  maxWidth?: string;
  margin?: string;
  children?: ReactNode;
};

const ItemWrapper: FC<Props> = ({className, children}) => (
  <div className={className}>{children}</div>
);

export default ItemWrapper;