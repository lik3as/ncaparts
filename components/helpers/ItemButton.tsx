import { FC, ReactNode } from "react";

interface Props {
  variant?: "secondary" | "primary";
  className?: string;
  href?: string;
  children?: ReactNode;
}

interface ButtonProps {
  variant?: "secondary" | "primary";
  className?: string;
  children?: ReactNode;
}

interface AnchorProps {
  variant?: "secondary" | "primary";
  className?: string;
  href?: string;
  children?: ReactNode;
}

const ButtonElement: FC<ButtonProps> = ({variant, className, children}) => {
  return <button className={`${className} btn btn-${variant}`}>{children}</button>
}

const AnchorElement: FC<AnchorProps> = ({variant, className, href, children}) => {
  return <a className={`${className} btn btn-${variant}`} role="button" href={href}>{children}</a>
}

const Button: FC<Props> = ({variant, href, children, className}) => {
  if (href) {
    return (
      <AnchorElement className={className} variant={variant} href={href}>{children}</AnchorElement>
    )
  }
  return (
    <ButtonElement className={className} variant={variant}>{children}</ButtonElement>
  )
}

export default Button;