import { FC, ReactNode } from "react";
import styled from "styled-components";

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

const _Button: FC<ButtonProps> = ({variant, className, children}) => {
  return <button className={`${className} btn-${variant}`}>{children}</button>
}

const _Anchor: FC<AnchorProps> = ({variant, className, href, children}) => {
  return <a className={`${className} btn-${variant}`} role="button" href={href}>{children}</a>
}

export const Button = styled(_Button)`

`;

export const Anchor = styled(_Anchor)`
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  text-decoration: none;
  color: black;
  
`;