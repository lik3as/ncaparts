import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
  padding: 0;
  margin: 0;
 }

 :root {
  --header-height: 90px;
  --color-green-rgb: 37,211,102;
  --color-orange-hex: #f37634;
  --color-orange-rgb: 243, 118, 52;
  --color-dark-rgb: 20,20,20;
  --color-darker-rgb: 10,10,10;
 }


 @media screen and (max-width: 768px){
  html {
    font-size: .7rem;
  }
 }


 @font-face {
  font-family: 'Dic Sans';
  src: url('/fonts/dic-sans/Dic Sans Bold.otf');
  font-weight: 'bold';
 }

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Black'), local('LabradorB-Black'),
    url('/fonts/labrador/LabradorB-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: 'normal';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Black Italic'), local('LabradorB-BlackItalic'),
    url('/fonts/labrador/LabradorB-BlackItalic.ttf') format('truetype');
  font-weight: 900;
  font-style: 'italic';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Bold Italic'), local('LabradorB-BoldItalic'),
    url('/fonts/labrador/LabradorB-BoldItalic.ttf') format('truetype');
  font-weight: bold;
  font-style: 'italic';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B ExtraLight Italic'), local('LabradorB-ExtraLightItalic'),
    url('/fonts/labrador/LabradorB-ExtraLightItalic.ttf') format('truetype');
  font-weight: 200;
  font-style: 'italic';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Thin'), local('LabradorB-Thin'),
    url('/fonts/labrador/LabradorB-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: 'normal';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Thin Italic'), local('LabradorB-ThinItalic'),
    url('/fonts/labrador/LabradorB-ThinItalic.ttf') format('truetype');
  font-weight: 100;
  font-style: 'italic';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B ExtraBold Italic'), local('LabradorB-ExtraBoldItalic'),
    url('/fonts/labrador/LabradorB-ExtraBoldItalic.ttf') format('truetype');
  font-weight: 800;
  font-style: 'italic';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Medium Italic'), local('LabradorB-MediumItalic'),
    url('/fonts/labrador/LabradorB-MediumItalic.ttf') format('truetype');
  font-weight: 500;
  font-style: 'italic';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B ExtraLight'), local('LabradorB-ExtraLight'),
    url('/fonts/labrador/LabradorB-ExtraLight.ttf') format('truetype');
  font-weight: 200;
  font-style: 'normal';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Italic'), local('LabradorB-Italic'),
    url('/fonts/labrador/LabradorB-Italic.ttf') format('truetype');
  font-weight: 'normal';
  font-style: 'italic';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Light'), local('LabradorB-Light'),
    url('/fonts/labrador/LabradorB-Light.ttf') format('truetype');
  font-weight: 300;
  font-style: 'normal';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Medium'), local('LabradorB-Medium'),
    url('/fonts/labrador/LabradorB-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: 'normal';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Light Italic'), local('LabradorB-LightItalic'),
    url('/fonts/labrador/LabradorB-LightItalic.ttf') format('truetype');
  font-weight: 300;
  font-style: 'italic';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B'), local('LabradorB-Regular'),
    url('/fonts/labrador/LabradorB-Regular.ttf') format('truetype');
  font-weight: 'normal';
  font-style: 'normal';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B Bold'),  local('LabradorB-Bold'),
    url('/fonts/labrador/LabradorB-Bold.ttf') format('truetype');
  font-weight: 'bold';
  font-style: 'normal';
}

@font-face {
  font-family: 'Labrador B';
  src: local('Labrador B ExtraBold'), local('LabradorB-ExtraBold'),
    url('/fonts/labrador/LabradorB-ExtraBold.ttf') format('truetype');
  font-weight: 800;
  font-style: 'normal';
}
`