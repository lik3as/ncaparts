import styled from "styled-components";

const UnorderedList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  padding: .5rem;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;

  @media screen and (max-width: 768px){
    width: 100%;
    max-height: 100%;
    margin: 0 auto;

  }
`;

export { UnorderedList as Ul };

