/* eslint-disable react/prop-types */
import { TbShoppingBagEdit, TbListDetails } from "react-icons/tb";
import { SiContactlesspayment } from "react-icons/si";
import Menus from "../../UI/Menu";
import Table from "../../page/Table";

export default function OrdersRow({ index, order }) {
  const { cliente, mesa, alergias, pedido, bebida, postre } = order;
  return (
    <tr key={index}>
      <Table.td>{index}</Table.td>
      <Table.td>{cliente}</Table.td>
      <Table.td>{mesa}</Table.td>
      <Table.td>{alergias}</Table.td>
      <Table.td>{pedido}</Table.td>
      <Table.td>{bebida}</Table.td>
      <Table.td>{postre}</Table.td>
      <Table.td>
        <Menus>
          <Menus.Menu>
            <Menus.Toggle id={"bookingId"} />
            <Menus.List id={"bookingId"}>
              <Menus.Button icon={<TbShoppingBagEdit />}>Editar</Menus.Button>
              <Menus.Button icon={<TbListDetails />}>Detalles</Menus.Button>
              <Menus.Button icon={<SiContactlesspayment />}>
                Terminar pedido
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Menus>
      </Table.td>
    </tr>
  );
}
