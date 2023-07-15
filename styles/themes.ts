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

  .dropdown-menu {
    --bs-dropdown-bg:  rgba(var(--bs-dark-rgb),1);
    --bs-dropdown-link-color: #FFFFFF
  }

  :root {
    --bs-bg-opacity: 1;
  }

`;