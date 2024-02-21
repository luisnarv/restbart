/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyleTableTbody = styled.tbody`
  text-align: center;
  font-size: 1rem;
  background: #d5d5d5;
  border-radius: 5px;
`;

export default function TableTbody({ data, render }) {
  return (
    <>
      <StyleTableTbody>{data.map(render)}</StyleTableTbody>
    </>
  );
}
