import React, { FC, ReactNode } from "react";
import { Anchor, Button } from "./styles";

interface Props {
  variant?: "secondary" | "primary";
  className?: string;
  href?: string;
  children?: ReactNode;
}

const ItemButton: FC<Props> = ({variant, href, children, className}) => {
  if (href) {
    return (
      <Anchor className={className} variant={variant} href={href}>{children}</Anchor>
    )
  }
  return (
    <Button className={className} variant={variant}>{children}</Button>
  )
}

export default ItemButton;