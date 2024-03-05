import styled from "styled-components";

import Stats from "../feactures/dashboard/Stats";
import DashboardOrder from "../feactures/dashboard/DashboardOrder";
import Heading from "../UI/Heading";

import DashboardCharts from "../feactures/dashboard/DashboardCharts";

/**-------------------------- */

const StyleDashboard = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;
const Dashboarlayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10x;
`;

export default function Dashboard() {
  return (
    <StyleDashboard>
      <Heading as="h1">Bienvenido x </Heading>

      <Dashboarlayout>
        <Stats />
        <DashboardCharts />
        <DashboardOrder />

        {/* <Modal>
          <Modal.Open opens="modal1">
            <Button>abrir modal</Button>
          </Modal.Open>
          <Modal.Window name="modal1">{<CreateOrderForm />}</Modal.Window>
        </Modal> */}
      </Dashboarlayout>
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
