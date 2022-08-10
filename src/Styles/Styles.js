import styled from 'styled-components'

export const Button = styled.button`
    height: 2em;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 0 0 5px grey;
    font-size: 1.3rem;
    background-color: ${props => props.color || 'red'}; //#0ea5e9
    color: ${props => props.color || 'white'};
    padding: 0 0.7em;
    margin-left: 1em;
    transition: background-color 0.1s;
    cursor: pointer;
  }

  &:hover {
    background-color: transparent;
    border: 1px solid ${props => props.color || 'red'};
    color: ${props => props.color || 'red'};
  }
`