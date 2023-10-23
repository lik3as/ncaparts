import { FC, ReactNode } from "react";

type Props = ButtonProps & AnchorProps;

interface ButtonProps {
  variant?: "secondary" | "primary";
  className?: string;
  children?: ReactNode;
  type?: "submit" | "button" | "reset";
  target?: "_blank" | "_parent" | "_self" | "_top";
}


interface AnchorProps {
  variant?: "secondary" | "primary";
  className?: string;
  href?: string;
  children?: ReactNode;
  type?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
}


const ButtonElement: FC<ButtonProps> = ({variant, className, children, type}) => {
  return <button className={`${className} btn btn-${variant}`} type={type}>{children}</button>
}

const AnchorElement: FC<AnchorProps> = ({variant, className, href, children, type, target}) => {
  return <a target={target} className={`${className} btn btn-${variant}`} role="button" href={href} type={type}>{children}</a>
}

const Button: FC<Props> = ({variant, href, children, className, type, target}) => {
  if (href) {
    return (
      <AnchorElement target={target} className={className} variant={variant} href={href} type={type}>{children}</AnchorElement>
    )
  }
  return (
    <ButtonElement className={className} variant={variant} type={type}>{children}</ButtonElement>
  )
}

export default Button;