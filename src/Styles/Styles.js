import styled from "styled-components";

export const Button = styled.button`
    height: 2em;
    width: 5em;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 0 0 5px ${(props) => props.color || "red"};
    font-size: 1.3rem;
    background-color: ${(props) => props.color || "red"}; //#0ea5e9
    padding: 0 0.7em;
    margin-left: 1em;
    transition: background-color 0.1s;
    cursor: pointer;
  }

  &:hover {
    background-color: transparent;
    border: 1px solid ${(props) => props.color || "red"};
    color: ${(props) => props.color || "red"};
  }

  @media only screen and (max-width: 450px) {
    margin-left: 1em;
  }
`;

export const InputField = styled.input`
  background-color: #f1f5f9;
  width: 20em;
  height: 2em;
  outline: none !important;
  border: 3px solid #da0037;
  border-radius: 5px;
  font-size: 1.2rem;
  padding-left: 1rem;
  transition: width 0.3s;

  &::placeholder {
    color: grey;
  }

  @media only screen and (max-width: 450px) {
    width: 13em;
    height: 2.8em;
    margin-bottom: 1em;
    font-size: 1rem;

    &::placeholder {
      color: transparent;
    }
  }
`;

export const Alertbox = styled.div`
  height: 3em;
  width: 15em;
  margin: auto;
  padding: 1em;
  font-size: 1.2rem;
  background-color: ${(props) => props.color};
  color: black;
  border-radius: 10px;
  text-align: center;

  @media only screen and (max-width: 450px) {
    padding: 1em;
    font-size: 0.8rem;
  }
`;
