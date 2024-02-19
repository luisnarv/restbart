import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CreateOrderForm from "../feactures/Orders/CreateOrderForm";
import styled from "styled-components";

import Stats from "../feactures/dashboard/Stats";
import SalesChart from "../feactures/dashboard/SalesChart";
import DashboardOrder from "../feactures/dashboard/DashboardOrder";

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
  "Numero de pedido",
  "Nombre del cliente",
  "Número de mesa",
  "Alergias alimentarias",
  "Detalles del pedido",
  "Bebidas",
  "Postre",
  "",
];
/**-------------------------- */

const StyleDashboard = styled.div`
  color: black;
`;

const data = [
  { month: "Enero", ventas: 3500 },
  { month: "Febrero", ventas: 4200 },
  { month: "Marzo", ventas: 4800 },
  { month: "Abril", ventas: 5200 },
  { month: "Mayo", ventas: 6000 },
  { month: "Junio", ventas: 6800 },
  { month: "Julio", ventas: 7100 },
  { month: "Agosto", ventas: 6900 },
  { month: "Septiembre", ventas: 6400 },
  { month: "Octubre", ventas: 5800 },
  { month: "Noviembre", ventas: 4900 },
  { month: "Diciembre", ventas: 4100 },
];

const Ventas = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Dashboard() {
  return (
    <StyleDashboard>
      <h1>Bienvenido x </h1>

      <Stats />
      <br />
      <Ventas>
        <SalesChart data={data} />
        <DashboardOrder />
      </Ventas>
      <br />
      <Modal>
        <Modal.Open opens="modal1">
          <Button>abrir modal</Button>
        </Modal.Open>
        <Modal.Window name="modal1">{<CreateOrderForm />}</Modal.Window>
      </Modal>
    </StyleDashboard>
  );
}

{
  /* <header
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Dashboard de Usuario</h1>
          <nav>
            <ul style={{ listStyleType: "none", margin: 0 }}>
              <li style={{ display: "inline", margin: "0 10px" }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Inicio
                </a>
              </li>
              <li style={{ display: "inline", margin: "0 10px" }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Inventario
                </a>
              </li>
              <li style={{ display: "inline", margin: "0 10px" }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Pedidos
                </a>
              </li>
              <li style={{ display: "inline", margin: "0 10px" }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Reportes
                </a>
              </li>
              <li style={{ display: "inline", margin: "0 10px" }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Configuración
                </a>
              </li>
            </ul>
          </nav>
        </header>*/
}
