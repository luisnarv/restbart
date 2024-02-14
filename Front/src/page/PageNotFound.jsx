import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyleNotFound = styled.div`
  font-size: 2rem;
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  margin: none;
  border: none;
  border-radius: 50pc;
  font-family: 1rem;
  padding: 10px 20px;
  font-weight: 700;
  cursor: pointer;
  transition: all 1s ease-in-out;
  margin: 20px;

  &:hover {
    background-color: #a0a0a0;
  }
`;

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <StyleNotFound>
      ERROR PAGE NOT FOUND 😕
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </StyleNotFound>
  );
}
