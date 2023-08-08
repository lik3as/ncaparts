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
`;