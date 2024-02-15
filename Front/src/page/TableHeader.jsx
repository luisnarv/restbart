/* eslint-disable react/prop-types */
import styled from "styled-components";
import Table from "./Table";

const StyleTableHeader = styled.thead`
  min-width: 100px;
  font-size: 1rem;
  background: #dfdede5e;
  border-radius: 5px;
`;

export default function TableHeader({ data }) {
  return (
    <StyleTableHeader>
      <tr>
        {data.map((head, index) => (
          <Table.th key={index}>{head}</Table.th>
        ))}
      </tr>
    </StyleTableHeader>
  );
}
