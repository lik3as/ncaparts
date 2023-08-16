import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #222;

  margin: 0 15px 0 0;
  transition: all .3s ease;
  padding: .5rem;

  border: 6px solid transparent;
  border-radius: 6px;
  outline: #444444 solid 1px;

  height: 100%;

  &:hover {
    transform: perspective(200px) translateZ(5px);
    outline-color: #666666;
  }

  & a {
    height: 100%;
  }

  @media screen and (max-width: 768px){
    display: list-item;
    width: 100%;
  }

  @media screen and (max-width: 480px){
    display: flex;
    height: 18rem;
    width: 100%;
    max-height: 90%;

  }
`;

export { ListItem }