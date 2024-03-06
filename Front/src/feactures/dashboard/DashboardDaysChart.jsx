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
import { COLORS } from "../../utils/constans";
import { color } from "../../utils/helpers";

const data = [
  { name: "10 ", ventas: 50, color: "" },
  { name: "12 ", ventas: 120, color: "" },
  { name: "2 ", ventas: 190, color: "" },
  { name: "4 ", ventas: 150, color: "" },
  { name: "6 ", ventas: 100, color: "" },
  { name: "8 ", ventas: 190, color: "" },
  { name: "11 ", ventas: 150, color: "" },
];
for (let i = 0; i < data.length; i++) {
  const porce = (data[i].ventas / 200) * 100;

  const pColor = color(porce, COLORS);
  data[i].color = pColor;
}

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
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="0 2" />
          <XAxis
            name="name"
            dataKey="name"
            fontSize={"1rem"}
            tick={{ stroke: "black", strokeWidth: 1 }}
            tickMargin={15}
            axisLine={false}
            tickLine={false}
          />
          {/*
          <YAxis fontSize={"1rem"} /> 
          */}
          {/* <Tooltip dataKey="name" offset={2} itemStyle={{ fontSize: "1rem" }} /> */}
          <Bar
            dataKey="ventas"
            fill="#a4a2a2"
            label={{ position: "top", fontSize: 15, fontWeight: 600 }}
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
