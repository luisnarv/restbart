/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyleTableTbody = styled.tbody`
  text-align: center;
  font-size: 1rem;
  border-radius: 5px;
  box-shadow: -1px 4px 11px 1px #0000002e;
`;

export default function TableTbody({ data, render }) {
  return (
    <>
      <StyleTableTbody>{data.map(render)}</StyleTableTbody>
    </>
  );
}
