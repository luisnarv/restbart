import styled from "styled-components";
import { CiUser } from "react-icons/ci";

const StyleHeader = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 2% 2% 0%;
  align-items: center;
  color: black;
  background-color: #dcdcdc29;
`;

const User = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export default function Header() {
  return (
    <StyleHeader>
      <div>Logo</div>
      <User>
        <span>User Name</span>
        <CiUser />
      </User>
    </StyleHeader>
  );
}
