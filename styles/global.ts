import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
 }

 main {
  position: fixed;
  top: var(--header-height);
  width: 100%;
  height: 1000%;
  background-color: #141414;
 }

 :root {
  --header-height: 90px;
  --nav-width: auto;
  --color-green-rgb: 37,211,102;
  --color-orange-hex: #f37634;
  --color-orange-rgb: 243, 118, 52;
 }

 @font-face {
  font-family: 'Dic Sans';
  src: url('/fonts/dic-sans/Dic Sans Bold.otf');
  font-weight: 'bold';
 }

 @media screen and (max-width: 768px){
  html {
    font-size: .7rem;
  }
 }

 @media screen and (max-height: 670px){
  main {
    overflow-y: scroll
  }
 }
`