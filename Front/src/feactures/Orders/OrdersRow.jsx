/* eslint-disable react/prop-types */
import { TbShoppingBagEdit, TbListDetails } from "react-icons/tb";
import { SiContactlesspayment } from "react-icons/si";
import Menus from "../../UI/Menu";
import Table from "../../page/Table";

export default function OrdersRow({ index, order }) {
  const { cliente, mesa, alergias, pedido, bebida, postre } = order;
  return (
    <Table.tr key={index} color={index % 2 === 0 ? "#ffffff" : "#efefef"}>
      <td>{index}</td>
      <td>{cliente}</td>
      <td>{mesa}</td>
      <td>{alergias}</td>
      <td style={{ padding: "10px" }}>{pedido}</td>
      <td>{bebida}</td>
      <td>{postre}</td>
      <td style={{ width: "100px" }}>
        <Menus>
          <Menus.Menu>
            <Menus.Toggle id={"OrderID"} />
            <Menus.List id={"OrderID"}>
              <Menus.Button icon={<TbShoppingBagEdit />}>Editar</Menus.Button>
              <Menus.Button icon={<TbListDetails />}>Detalles</Menus.Button>
              <Menus.Button icon={<SiContactlesspayment />}>
                Terminar pedido
              </Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Menus>
      </td>
    </Table.tr>
  );
}
