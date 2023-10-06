"use client"

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  .ani-rotate {
    animation: rotation 6s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform:  rotate(360deg);
    }
  }

  .fullscreen {
    height: 100vh;
    width: 100vw;
  }

  .center-items {
    justify-content: center;
    align-items: center;
  }
`;