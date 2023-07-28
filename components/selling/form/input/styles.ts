import { Button as ItemButton } from 'react-bootstrap';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: none;
  padding-bottom: 5px;
  transition: all .15s ease;
  background-color: transparent;

  &:active {
    background-color: #f37634;
  }

  @media screen and (max-width: 768px){
    width: 2rem;
  }
`;

export { Button }