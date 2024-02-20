import styled from "styled-components";

const StyleHeader = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 2% 2% 0%;
  align-items: center;
  color: black;
  background-color: #dcdcdc29;
`;
export default function Header() {
  return (
    <StyleHeader>
      <div>Logo</div>
    </StyleHeader>
  );
}
