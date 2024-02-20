import styled, { css } from "styled-components";
import Heading from "../../UI/Heading";

const StyleOrders = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
  border-radius: 10px;
  justify-content: center;
  box-shadow: 2px 3px 4px #00000044;
`;

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

const List = styled.li`
  display: flex;
  font-size: 1rem;
  margin: 5px;
`;
const UList = styled.ul`
  width: 80%;
`;

const OrderSpan = styled.span`
  text-transform: capitalize;
  font-size: 1rem;
  width: 100px;
  height: 40px;
  ${(props) =>
    props.state === "paid" &&
    css`
      background-color: #3ed53ec3;
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
      color: white;
      border-radius: 5px;
      font-weight: 600;
    `}
  ${(props) =>
    props.state === "delivered" &&
    css`
      background-color: #047ec0c4;
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
      color: white;
      border-radius: 5px;
      font-weight: 600;
    `}
    ${(props) =>
    props.state === "pending" &&
    css`
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
      color: white;
      background-color: #d1cb13c7;
      border-radius: 5px;
      font-weight: 600;
    `};
`;

const LineStyle = styled.hr`
  border: solid 1px #c6c6c6;
`;

export default function DashboardOrder() {
  return (
    <StyleOrders>
      <Heading as="h2">Pedidos recientes</Heading>
      <hr />
      <UList>
        {fakeOrderDataArray.map((order) => (
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
            <LineStyle />
          </>
        ))}
      </UList>
    </StyleOrders>
  );
}
