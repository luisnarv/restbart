import styled from "styled-components";

const Input = styled.input`
  border: solid 2px #bdbaba;
  background-color: #f7f7f7;
  height: 10px;
  padding: 10px;

  outline-style: none;
  border-radius: 5px;
  transition: all 0.4s linear;

  &:focus,
  &:hover {
    border-color: #437343;
  }
`;

export default Input;
