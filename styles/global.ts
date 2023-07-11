import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
 }

 html {
  background-color: #141414;
 }
 
 :root {
  --header-height: 90px;
  --nav-width: 240px;
  --color-green: rgba(37,211,102,255);
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
`