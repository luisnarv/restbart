/* eslint-disable react/prop-types */
import styled from "styled-components";
import Table from "../../page/Table";

const IButton = styled.button`
  outline-style: none;
  border: none;
  background-color: unset;
  width: 50px;
`;

export default function InventoryRows({ item, index }) {
  return (
    <Table.tr key={index} color={index % 2 === 0 ? "#ffffff" : "#efefef"}>
      <td style={{ padding: "10px" }}>{item.nombre}</td>
      <td>{item.cantidad} </td>
      <td>{item.unidad}</td>
      <td>
        <IButton>➕</IButton>
      </td>
      <td>
        <IButton>➖</IButton>
      </td>
    </Table.tr>
  );
}
