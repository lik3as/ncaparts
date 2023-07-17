import styled from "styled-components";

const Main = styled.main`
  position: relative;
  padding: 2.5rem;
  width: 100%;

  @media screen and (max-width: 768px){
    position: fixed;
    width: 100%;
    height: 100%;
  }
`

export default Main;