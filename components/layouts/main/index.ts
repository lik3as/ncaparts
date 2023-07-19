import styled from "styled-components";

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px){
    position: fixed;
    width: 100%;
    height: calc(100% - var(--header-height));
    overflow-y: scroll;
  }
`

export default Main;