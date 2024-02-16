/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyleTable = styled.table``;
const StyleTh = styled.th`
  padding: 10px;
`;
const styleTd = styled.td`
  padding: 10px;
`;

export default function Table({ children }) {
  return <StyleTable>{children}</StyleTable>;
}

Table.th = StyleTh;
Table.td = styleTd;
