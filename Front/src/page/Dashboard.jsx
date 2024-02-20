import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CreateOrderForm from "../feactures/Orders/CreateOrderForm";
import styled from "styled-components";

import Stats from "../feactures/dashboard/Stats";
import SalesChart from "../feactures/dashboard/SalesChart";
import DashboardOrder from "../feactures/dashboard/DashboardOrder";

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

export default function Dashboard() {
  return (
    <StyleDashboard>
      <h1>Bienvenido x </h1>

      <Stats />
      <br />
      <DashboardOrder />

      <br />
      <SalesChart data={data} />
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
