import styled, { css } from "styled-components";

const StyledContent = styled.div`
  padding: 10px;
  gap: 10px;
  border-radius: 5px;
  display: flex;
  ${(props) =>
    props.display === "flex" &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.display === "column" &&
    css`
      flex-direction: column;
    `};
`;

export default StyledContent;
