import styled from "styled-components";

const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1; 
  height: 100%;

  @media screen and (max-width: 1024px){
    min-width: calc(80vw - 6rem);
    
  }

  @media screen and (max-width: 768px){
    width: 100%;
    height: 100%;
  }
`

export default Content;