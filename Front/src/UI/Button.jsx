/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyleButton = styled.button`
  border: none;
  color: #fff;
  background-image: linear-gradient(30deg, #0400ff, #4ce3f7);
  border-radius: 20px;
  background-size: 100% auto;
  font-family: inherit;
  font-size: 17px;
  padding: 0.6em 1.5em;
  cursor: pointer;

  &:hover {
    background-position: right center;
    background-size: 200% auto;
    -webkit-animation: pulse 2s infinite;
    animation: pulse512 1.5s infinite;
  }

  @keyframes pulse512 {
    0% {
      box-shadow: 0 0 0 0 #05bada66;
    }

    70% {
      box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
    }

    100% {
      box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
    }
  }
`;
export default function Button({ id = "", children, onClick }) {
  return (
    <StyleButton id={id} onClick={onClick}>
      {children}
    </StyleButton>
  );
}
