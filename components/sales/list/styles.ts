import styled from "styled-components";

const UnorderedList = styled.ul`
  display: flex;
  margin: 0;
  padding: .5rem;
  width: 100%;
  padding-bottom: .8rem;
  overflow-y: hidden;

  @media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 10px;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    max-height: 100%;
    margin: 0 auto;
    overflow-x: hidden;

  }

  @media screen and (max-width: 480px){
    grid-template-columns: 30% 30% 30%;
  }
`;

export { UnorderedList as UL };
