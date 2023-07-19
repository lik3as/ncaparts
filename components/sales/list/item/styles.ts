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

  &:hover {
    transform: perspective(200px) translateZ(5px);
    outline-color: #666666;
  }

  @media screen and (max-width: 768px){
    display: list-item;
    margin-bottom: 15px;
    width: 100%;
  }

  @media screen and (max-width: 480px){
    height: 20rem;
    width: 100%;
  }
`;

export { ListItem }