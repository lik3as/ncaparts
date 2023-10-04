import styled from "styled-components";

const Content = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 20% 80%;
  top: var(--header-height);
  width: 100%;
  height: calc(100vh - var(--header-height));
  z-index: -1;
  background: rgba(var(--color-dark-rgb), 1);
  transition: all .15s linear;

  &.hidden {
    background: rgba(var(--color-darker-rgb), 1);
  }

  @media screen and (max-width: 1100px){
    grid-template-columns: 28% 72%;    
  }
`

export default Content;