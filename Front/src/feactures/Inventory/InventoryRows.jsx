/* eslint-disable react/prop-types */
import Table from "../../page/Table";

export default function InventoryRows({ item, index }) {
  return (
    <Table.tr key={index} color={index % 2 === 0 ? "#ffffff" : "#efefef"}>
      <td>{item.nombre}</td>
      <td>{item.cantidad}</td>
      <td>{item.unidad}</td>
    </Table.tr>
  );
}
