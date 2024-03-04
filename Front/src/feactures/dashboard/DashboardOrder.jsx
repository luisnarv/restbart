import styled, { css } from "styled-components";
import Heading from "../../UI/Heading";
import HrLine from "../../UI/HrLine";

const fakeOrderDataArray = [
  {
    key: 1,
    nombreUsuario: "Juan Pérez",
    pedido: "Combo de Patatas",
    cantidad: 2,
    total: 100,
    estado: "paid",
  },
  {
    key: 2,
    nombreUsuario: "María López",
    pedido: "Pizza Hawaiana",
    cantidad: 1,
    total: 150,
    estado: "paid",
  },
  {
    key: 3,
    nombreUsuario: "Carlos Rodríguez",
    pedido: "Hamburguesa con Queso",
    cantidad: 2,
    total: 200,
    estado: "pending",
  },
  {
    key: 4,
    nombreUsuario: "Laura García",
    pedido: "Ensalada César",
    cantidad: 1,
    total: 80,
    estado: "paid",
  },
  {
    key: 5,
    nombreUsuario: "Pedro Martínez",
    pedido: "Combo de Pollo Frito",
    cantidad: 3,
    total: 250,
    estado: "delivered",
  },
];

const StyleOrders = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6e4;
  border-radius: 10px;
  box-shadow: 2px 3px 4px #00000044;
`;

const UList = styled.ul`
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
`;
const List = styled.li`
  display: flex;
  font-size: 1rem;
  margin: 5px;
`;

const OrderSpan = styled.span`
  text-transform: capitalize;
  font-size: 1rem;
  width: 100px;
  height: 40px;
  border-radius: 105px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  ${(props) =>
    props.state === "paid" &&
    css`
      align-items: center;
      background-color: #00fe006f;
      color: #146b15;
      font-weight: 700;
    `}
  ${(props) =>
    props.state === "delivered" &&
    css`
      background-color: #00a6ff70;
      color: #265a76;
      font-weight: 700;
    `}
    ${(props) =>
    props.state === "pending" &&
    css`
      font-weight: 700;
      background-color: #fff70070;
      color: #676528;
    `}
`;

export default function DashboardOrder() {
  return (
    <StyleOrders>
      <Heading as="h2"> Pedidos recientes</Heading>
      <hr />
      <UList>
        {fakeOrderDataArray.map((order, index) => (
          <>
            <List key={order.key}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "150px",
                  alignItems: "flex-start",
                }}
              >
                <Heading as="h5">{order.nombreUsuario}</Heading>
                <p>ID {order.key}</p>
              </div>

              <OrderSpan>{order.pedido}</OrderSpan>
              <OrderSpan>X{order.cantidad}</OrderSpan>
              <OrderSpan>${order.total}</OrderSpan>
              <OrderSpan state={order.estado}>{order.estado}</OrderSpan>
            </List>
            {index + 1 < fakeOrderDataArray.length && <HrLine />}
          </>
        ))}
      </UList>
    </StyleOrders>
  );
}
