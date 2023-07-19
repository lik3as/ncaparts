import styled from "styled-components";

const UnorderedList = styled.ul`
  display: flex;
  margin: 0;
  padding: .5rem;
  width: 100%;
  overflow-y: hidden;

  @media screen and (max-width: 768px){
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    max-height: 100%;
    margin: 0 auto;
    overflow-x: hidden;

  }
`;

export { UnorderedList as Ul };

