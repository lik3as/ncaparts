"use client"
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
  .btn-secondary {
    --bs-btn-color: #AAAAAA;
    --bs-btn-bg: transparent;
    --bs-btn-border-color: none;
    --bs-btn-hover-color: #FFFFFF;
    --bs-btn-hover-bg: transparent;
    --bs-btn-hover-border-color: #565e64;
    --bs-btn-focus-shadow-rgb: 130,138,145;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: transparent;
    --bs-btn-active-border-color: #51585e;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #6c757d;
    --bs-btn-disabled-border-color: #6c757d;

  }

  .btn-primary {
    --bs-btn-color: black;
    --bs-btn-bg: var(--color-orange-hex);
    --bs-btn-border-color: none;
    --bs-btn-hover-color: black;
    --bs-btn-hover-bg: var(--color-orange-hex);
    --bs-btn-hover-border-color: #565e64;
    --bs-btn-focus-shadow-rgb: 130,138,145;
    --bs-btn-active-color: black;
    --bs-btn-active-bg: rgba(var(--color-orange-rgb), .65);
    --bs-btn-active-border-color: #51585e;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #6c757d;
    --bs-btn-disabled-border-color: #6c757d;
  }

  .dropdown-menu {
    --bs-dropdown-bg:  rgba(var(--bs-dark-rgb),1);
    --bs-dropdown-link-color: #FFFFFF
  }

  :root {
    --bs-bg-opacity: 1;
    --color-green-rgb: 37,211,102;
    --color-orange-hex: #f37634;
    --color-orange-rgb: 243, 118, 52;
    --color-dark-rgb: 20,20,20;
    --color-darker-rgb: 10,10,10;
  }

  .dark-background {
    background-color: #141414;
  }

`;