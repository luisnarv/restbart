import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CreateOrderForm from "../feactures/Orders/CreateOrderForm";
import styled from "styled-components";

import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
} from "recharts";

const StyleDashboard = styled.body`
  color: black;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  gap: 5%;
  margin: 40px 0px;
`;

const Item = styled.div`
  background-color: #f4f4f4;
  font-size: 1rem;
  padding: 20px;
  margin: 10px;
  width: calc(30% - 20px);
`;

const Div = styled.div`
  display: flex;
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 20px;
  gap: 10px;
`;

const Element = styled.div``;

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
      <body>
        <h1>Welcome x </h1>
        <Div>
          <Element>
            <h3>📈 Ventas diarias</h3>
            <span># 100 </span>
          </Element>
          <hr />
          <Element>
            <h3>📈 Ventas diarias</h3>
            <span># 100 </span>
          </Element>
          <hr />
          <Element>
            <h3>📈 Ventas diarias</h3>
            <span># 100 </span>
          </Element>
          <hr />
          <Element>
            <h3>📈 Ventas diarias</h3>
            <span># 100 </span>
          </Element>
        </Div>
        <br />
        <div style={{ display: "flex", gap: "2%" }}>
          <Div>
            <BarChart width={730} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* <Bar dataKey="month" fill="#8884d8" /> */}
              <Bar dataKey="ventas" fill="#82ca9d" />
            </BarChart>
            <br />
          </Div>
          <br />
          <Div>
            <h1>Add funtion</h1>
          </Div>
        </div>
        <Section>
          <Button>Agregar producto</Button>

          <Button>Actualizar Inventario</Button>

          <Button>Generar Reporte</Button>
        </Section>
        <Section>
          <Item>
            <h3>Producto 1</h3>
            <p>Descripción: Lorem ipsum dolor sit amet</p>
            <p>Cantidad: 50 unidades</p>
            <p>Precio unitario: $10</p>
          </Item>
          <Item>
            <h3>Producto 2</h3>
            <p>Descripción: Consectetur adipiscing elit</p>
            <p>Cantidad: 30 unidades</p>
            <p>Precio unitario: $20</p>
          </Item>
          <Item>
            <h3>Producto 3</h3>
            <p>Descripción: Consectetur adipiscing elit</p>
            <p>Cantidad: 30 unidades</p>
            <p>Precio unitario: $20</p>
          </Item>
        </Section>
        <Section>
          <h3>ventas </h3>
          <Item></Item>
        </Section>
      </body>
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
