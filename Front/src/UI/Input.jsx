import styled from "styled-components";

const Input = styled.input`
  border-style: none;
  background-color: #f7f7f7;
  height: 10px;
  padding: 10px;

  outline-style: none;
  border-radius: 5px;
  transition: all 0.4s linear;

  &:focus,
  &:hover {
    box-shadow: 2px 4px 2px 0px #69696936;
  }
`;

export default Input;
