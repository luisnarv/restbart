import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import styled from "styled-components";
import { COLORS } from "../../utils/constans";
import { color } from "../../utils/helpers";

const data = [
  { name: "2 PM ", ventas: 190, color: "" },
  { name: "4 PM", ventas: 150, color: "" },
  { name: "6 PM", ventas: 100, color: "" },
  { name: "8 PM", ventas: 190, color: "" },
  { name: "11 PM", ventas: 150, color: "" },
];
for (let i = 0; i < data.length; i++) {
  const porce = (data[i].ventas / 200) * 100;

  const pColor = color(porce, COLORS);
  data[i].color = pColor;
}

const StyleDaysChart = styled.div`
  width: 40%;
  padding: 10px;
  display: flex;
  height: 280px;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffff58;
  box-shadow: 2px 3px 4px #00000044;
`;

export default function DashboardDaysChart() {
  return (
    <StyleDaysChart>
      <h5>Ventas del día</h5>
      <hr width="100%" />
      <ResponsiveContainer width="90%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="0 1" />
          <XAxis
            name="name"
            dataKey="name"
            fontSize={"1rem"}
            tick={{ stroke: "black", strokeWidth: 1 }}
            tickMargin={5}
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="ventas"
            fill="#a4a2a2"
            label={{
              position: "right",
              fontSize: 15,
              fontWeight: 600,
            }}
            maxBarSize={10}
            minPointSize={1}
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
