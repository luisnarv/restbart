/* eslint-disable react/prop-types */
import styled from "styled-components";
import Table from "./Table";

const StyleTableHeader = styled.thead`
  min-width: 100px;
  font-size: 1rem;
  background: #fac800;
`;

export default function TableHeader({ data }) {
  return (
    <StyleTableHeader>
      <Table.tr>
        {data.map((head, index) => (
          <th style={{ padding: "10px" }} key={index}>
            {head}
          </th>
        ))}
      </Table.tr>
    </StyleTableHeader>
  );
}
