import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
 }

 #content {
  position: fixed;
  top: var(--header-height);
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(var(--color-dark-rgb), 1);
  transition: all .15s linear;
 }

 #content.hidden {
  background: rgba(var(--color-darker-rgb), 1);
 }

 main {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;
 }

 :root {
  --header-height: 90px;
  --nav-width: auto;
  --color-green-rgb: 37,211,102;
  --color-orange-hex: #f37634;
  --color-orange-rgb: 243, 118, 52;
  --color-dark-rgb: 20,20,20;
  --color-darker-rgb: 10,10,10;
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
    overflow-y: scroll;
  }
 }
`