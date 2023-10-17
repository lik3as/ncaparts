import styled from "styled-components";

const UnorderedList = styled.ul`
  display: flex;
  margin: 0;
  padding: .5rem;
  width: 100%;
  padding-bottom: .8rem;
  overflow-y: hidden;
  height: auto;

  @media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 10px;
    justify-content: center;
    padding-left: .5rem;
    padding-right: .5rem;
    width: 100%;
    max-height: 100%;
    margin: 0 auto;
    overflow-x: hidden;

  }

  @media screen and (max-width: 480px){
    justify-content: center;
    align-items: center;
  }
`;

export { UnorderedList as UL };
