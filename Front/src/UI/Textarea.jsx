import styled from "styled-components";

const Textarea = styled.textarea`
  border-radius: 5px;
  padding: 10px;
  outline-style: none;
  background-color: #f7f7f7;
  border: solid 2px #bdbaba;
  transition: all 1s;
  &:focus,
  &:hover {
    border: solid 2px #437343;
  }
`;

export default Textarea;
