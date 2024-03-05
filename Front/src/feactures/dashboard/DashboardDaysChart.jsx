import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const data = [
  { day: "Lunes", ventas: 2500, color: "#0428f6" },
  { day: "Martes", ventas: 2800, color: "#f8832f" },
  { day: "Miércoles", ventas: 3200, color: "#14cddb" },
  { day: "Jueves", ventas: 3000, color: "#fff20f" },
  { day: "Viernes", ventas: 3500, color: "#ec391d" },
  { day: "Sábado", ventas: 4000, color: "#8ae8e3" },
  { day: "Domingo", ventas: 4200, color: "#9dde25" },
];

const StyleDaysChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 30%;
  height: auto;
  border-radius: 10px;
  box-shadow: 2px 3px 4px #00000044;
`;

export default function DashboardDaysChart() {
  return (
    <StyleDaysChart>
      <h5>Horarios de mejor venta</h5>
      <hr width="100%" />
      <ResponsiveContainer width="90%" height="70%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" fontSize={"1rem"} orientation="top" />
          <YAxis fontSize={"1rem"} />
          <Tooltip labelStyle={{ fontSize: "1rem" }} />
          <Bar
            dataKey="ventas"
            fill="#8884d8"
            label={{ position: "top" }}
            fontSize={"0.1rem"}
          >
            {data.map((entry, index) => (
              <Cell
                fontSize={"1rem"}
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyleDaysChart>
  );
}
