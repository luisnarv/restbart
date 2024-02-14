import styled from "styled-components";

const Select = styled.select`
  color: #797979;
  border-radius: 5px;
  padding: 10px;
  outline-style: none;
  border: solid 2px #bdbaba;
  transition: all 1s;
  cursor: pointer;
  &:focus,
  &:hover {
    border-color: #437343;
  }
`;

export default Select;
