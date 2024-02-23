/* eslint-disable react/prop-types */
import styled from "styled-components";
import Table from "./Table";

const StyleTableHeader = styled.thead`
  min-width: 100px;
  font-size: 1rem;
`;

export default function TableHeader({ data, color }) {
  return (
    <StyleTableHeader>
      <Table.tr color={color}>
        {data.map((head, index) => (
          <th style={{ padding: "10px" }} key={index}>
            {head}
          </th>
        ))}
      </Table.tr>
    </StyleTableHeader>
  );
}
