import styled, { css } from "styled-components";

const StyledContent = styled.div`
  padding: 10px;
  border-radius: 5px;
  width: 100%;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: space-between;
    `}
`;

export default StyledContent;
