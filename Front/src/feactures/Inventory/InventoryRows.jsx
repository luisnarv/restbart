/* eslint-disable react/prop-types */
import Table from "../../page/Table";

export default function InventoryRows({ item, index }) {
  return (
    <tr key={index}>
      <Table.td>{item.nombre}</Table.td>
      <Table.td>{item.cantidad}</Table.td>
      <Table.td>{item.unidad}</Table.td>
    </tr>
  );
}
