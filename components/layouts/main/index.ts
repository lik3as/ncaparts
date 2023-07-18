import styled from "styled-components";

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  padding-bottom: .5rem;
  padding-right: 1rem;
  width: 100%;
  height: calc(100% - var(--header-height));

  @media screen and (max-width: 1080px) {
    width: 93%;
  }

  @media screen and (max-width: 768px){
    position: fixed;
    width: 100%;
    height: 90%;
    overflow-y: scroll;
  }
`

export default Main;