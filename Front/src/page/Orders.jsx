import Table from "./Table";
import TableHeader from "./TableHeader";
import TableTbody from "./TableTbody";

import OrdersRow from "../feactures/Orders/OrdersRow";
import TableFooter from "./TableFooter";
import Pagination from "./Pagination";
import styled from "styled-components";
import Heading from "../UI/Heading";

const ordersData = [
  {
    cliente: "Juan Perez",
    mesa: "5",
    alergias: "Ninguna",
    pedido: "Hamburguesa, sin cebolla, 2; Pizza, extra queso, 1",
    bebida: "Cocacola",
    postre: "Postre 1",
  },
  {
    cliente: "Maria Lopez",
    mesa: "3",
    alergias: "Gluten",
    pedido: "Ensalada César, sin crutones, 1; Sushi, sin wasabi, 2",
    bebida: "Jugo natural",
    postre: "Postre 3",
  },
  {
    cliente: "Carlos Gomez",
    mesa: "7",
    alergias: "Lactosa",
    pedido: "Pasta Alfredo, sin queso, 1; Ensalada mixta, 1",
    bebida: "Agua",
    postre: "Postre 2",
  },
  {
    cliente: "Ana Martínez",
    mesa: "2",
    alergias: "Ninguna",
    pedido: "Parrillada mixta, bien hecho, 1; Papas fritas, 1",
    bebida: "Vino tinto",
    postre: "Postre 4",
  },
  {
    cliente: "Pedro Rodríguez",
    mesa: "4",
    alergias: "Nueces",
    pedido: "Ensalada de frutas, sin nueces, 1; Tarta de manzana, 1",
    bebida: "Limonada",
    postre: "Postre 1",
  },
  {
    cliente: "Laura González",
    mesa: "8",
    alergias: "Ninguna",
    pedido: "Pollo asado, 1; Arroz blanco, 1",
    bebida: "Refresco de limón",
    postre: "Postre 3",
  },
  {
    cliente: "Sofía Hernandez",
    mesa: "6",
    alergias: "Gluten",
    pedido: "Pizza vegetariana, sin queso, 1; Ensalada de quinoa, 1",
    bebida: "Agua de coco",
    postre: "Postre 2",
  },
  {
    cliente: "Luis Ramirez",
    mesa: "1",
    alergias: "Lactosa",
    pedido: "Tacos al pastor, sin crema, 2; Guacamole, 1",
    bebida: "Margarita",
    postre: "Postre 4",
  },
  {
    cliente: "Elena Castillo",
    mesa: "9",
    alergias: "Ninguna",
    pedido: "Sopa de verduras, 1; Filete de salmón, 1",
    bebida: "Té helado",
    postre: "Postre 1",
  },
  {
    cliente: "Diego Muñoz",
    mesa: "10",
    alergias: "Gluten",
    pedido: "Tortilla española, sin pan, 1; Paella, sin mariscos, 1",
    bebida: "Sangría",
    postre: "Postre 3",
  },
];

const fakeHeaders = [
  "# Pedido",
  "Cliente",
  "# Mesa",
  "Alergias alimentarias",
  "Detalles del pedido",
  "Bebidas",
  "Postre",
  "",
];
const StyleOrders = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 3px 4px #00000044;
  background-color: white;
  border-radius: 10px;
`;

const Content = styled.div``;

export default function Orders() {
  return (
    <StyleOrders>
      <Heading as="h1">Ordenes </Heading>
      <Content>
        <Table>
          <TableHeader data={fakeHeaders} />

          <TableTbody
            data={ordersData.slice(0, 5)}
            render={(order, index) => <OrdersRow order={order} index={index} />}
          />
        </Table>
        <br />

        <TableFooter>
          <Pagination count={100} />
        </TableFooter>
        <br />
      </Content>
    </StyleOrders>
  );
}
