import Table from "./Table";
import TableHeader from "./TableHeader";
import TableTbody from "./TableTbody";

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

export default function Orders() {
  return (
    <div>
      <Table>
        <TableHeader>
          <tr>
            <Table.th></Table.th>
            <Table.th>Numero de pedido</Table.th>
            <Table.th>Nombre del cliente</Table.th>
            <Table.th>Número de mesa</Table.th>
            <Table.th>Alergias alimentarias</Table.th>
            <Table.th>Detalles del pedido</Table.th>
            <Table.th>Bebidas</Table.th>
            <Table.th>Postre</Table.th>
            <Table.th></Table.th>
          </tr>
        </TableHeader>
        <TableTbody>
          {ordersData.map((order, index) => (
            <tr key={index}>
              <Table.td></Table.td>
              <Table.td>{index}</Table.td>
              <Table.td>{order.cliente}</Table.td>
              <Table.td>{order.mesa}</Table.td>
              <Table.td>{order.alergias}</Table.td>
              <Table.td>{order.pedido}</Table.td>
              <Table.td>{order.bebida}</Table.td>
              <Table.td>{order.postre}</Table.td>
              <Table.td></Table.td>
            </tr>
          ))}
        </TableTbody>
      </Table>
    </div>
  );
}
