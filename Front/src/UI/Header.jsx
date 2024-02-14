import styled from "styled-components";
import NavBar from "./NavBar";

const StyleHeader = styled.header`
  background-color: #eeeeee;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function Header() {
  return (
    <StyleHeader>
      Logo
      <NavBar />
    </StyleHeader>
  );
}
