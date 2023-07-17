import styled from "styled-components";

const Content = styled.div`
  position: fixed;
  display: flex;
  top: var(--header-height);
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(var(--color-dark-rgb), 1);
  transition: all .15s linear;

  &.hidden {
    background: rgba(var(--color-darker-rgb), 1);
  }

  @media screen and (max-height: 670px){
    overflow-y: scroll;
  }
`

export default Content;