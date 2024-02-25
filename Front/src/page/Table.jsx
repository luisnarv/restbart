/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyleTable = styled.table`
  border-collapse: collapse;
`;
const styleTd = styled.tr`
  position: relative;
  padding: 10px;
  background-color: ${(props) => props.color};
`;

export default function Table({ children }) {
  return <StyleTable>{children}</StyleTable>;
}

Table.tr = styleTd;
