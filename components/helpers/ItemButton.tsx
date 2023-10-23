import { FC, ReactNode } from "react";

interface Props {
  variant?: "secondary" | "primary";
  className?: string;
  href?: string;
  children?: ReactNode;
  type?: "submit" | "button" | "reset";
}

interface ButtonProps {
  variant?: "secondary" | "primary";
  className?: string;
  children?: ReactNode;
  type?: "submit" | "button" | "reset";
}

interface AnchorProps {
  variant?: "secondary" | "primary";
  className?: string;
  href?: string;
  children?: ReactNode;
  type?: string;
}

const ButtonElement: FC<ButtonProps> = ({variant, className, children, type}) => {
  return <button className={`${className} btn btn-${variant}`} type={type}>{children}</button>
}

const AnchorElement: FC<AnchorProps> = ({variant, className, href, children, type}) => {
  return <a className={`${className} btn btn-${variant}`} role="button" href={href} type={type}>{children}</a>
}

const Button: FC<Props> = ({variant, href, children, className, type}) => {
  if (href) {
    return (
      <AnchorElement className={className} variant={variant} href={href} type={type}>{children}</AnchorElement>
    )
  }
  return (
    <ButtonElement className={className} variant={variant} type={type}>{children}</ButtonElement>
  )
}

export default Button;