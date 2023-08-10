import { styled } from 'styled-components';

import {
  InputGroup as ItemInputGroup,
  Button as ItemButton,
} from 'react-bootstrap'
import { ReactSearchAutocomplete as ItemAutoCompleteSearch } from 'react-search-autocomplete';

const InputGroup = styled(ItemInputGroup)`
  width: calc(50vw - 40px);

  @media screen and (max-width: 1024px){
    width: calc(55vw - 40px);
  }

  @media screen and (max-width: 768px){
    width: calc(56vw - 40px);
  }

  @media screen and (max-width: 480px){
    width: calc(58vw - 40px);
  }
`;

const Button = styled(ItemButton)`
  width: calc(14vw - 30px);
  text-align: center;
  padding: .3rem !important;
  background-color: #33393e;


  @media screen and (max-width: 1024px){
    width: calc(14vw - 25px);
  }

  @media screen and (max-width: 768px){
    width: calc(14vw - 15px);
  }

  @media screen and (max-width: 480px){
    width: calc(14vw - 5px);
  }
`;

const AutocompleteSearch = styled(ItemAutoCompleteSearch)`
  justify-items: center;
  text-align: left;
  width: 45rem;
  position: fixed;

  @media screen and (max-width: 1024px){
    width: calc(50vw - 40px);
  };

  @media screen and (max-width: 768px){
    width: calc(48vw - 40px);

    & input {
      padding-left: 2px !important;
    }
  };

  @media screen and (max-width: 480px){
    width: calc(46vw - 40px);

  };
  
  & > div > div:nth-of-type(2){ //-> Recomendações
    & .search-icon {
      display: none;
    }

    & li {
      border-bottom: 1px solid #EEEEEE;
    }
  }
`;

export { Button, InputGroup, AutocompleteSearch }