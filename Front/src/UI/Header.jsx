import styled from "styled-components";
import NavBar from "./NavBar";

const StyleHeader = styled.header`
  background-color: #ffffff;
  padding: 10px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;
`;
export default function Header() {
  return (
    <StyleHeader>
      Logo
      <NavBar />
    </StyleHeader>
  );
}
