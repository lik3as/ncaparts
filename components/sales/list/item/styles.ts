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
  max-width: 12rem;

  &:hover {
    transform: perspective(200px) translateZ(5px);
    outline-color: #666666;
  }

  @media (width <= 768px ){
    display: list-item;
    max-width: none;
    width: 100%;
  }

  @media (width <= 480px){
    display: flex;
    height: 18rem;
    width: 100%;
    max-height: 90%;

  }
`;

export { ListItem }