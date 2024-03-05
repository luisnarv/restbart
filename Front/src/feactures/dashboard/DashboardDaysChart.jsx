import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const data = [
  { day: "Lunes", ventas: 2500 },
  { day: "Martes", ventas: 2800 },
  { day: "Miércoles", ventas: 3200 },
  { day: "Jueves", ventas: 3000 },
  { day: "Viernes", ventas: 3500 },
  { day: "Sábado", ventas: 4000 },
  { day: "Domingo", ventas: 4200 },
];

const StyleDaysChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 400px;
  border-radius: 10px;
  box-shadow: 2px 3px 4px #00000044;
`;

export default function DashboardDaysChart() {
  return (
    <StyleDaysChart>
      <ResponsiveContainer width="90%" height="100%">
        <BarChart width={430} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ventas" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </StyleDaysChart>
  );
}
