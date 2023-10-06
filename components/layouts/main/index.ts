import styled from "styled-components";

export interface Props {
  $width?: string | null;
  $overflowY?: string | null;
}

const Main = styled.main<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: ${(props) => props.$width ?? '100%'};
  overflow-y: ${(props) => props.$overflowY ?? 'hidden'};
  overflow-x: hidden;
  height: 100%;

  @media screen and (max-width: 768px){
    position: fixed;
    height: calc(100% - var(--header-height));
    overflow-y: scroll;
  }
`

export default Main;