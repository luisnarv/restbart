/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  Area,
} from "recharts";

const StyleSalesChart = styled.div`
  width: 40%;
  display: flex;
  background-color: #eaeaea;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;

  box-shadow: 2px 3px 4px #00000044;
`;
export default function SalesChart({ data }) {
  return (
    <StyleSalesChart>
      <BarChart width={930} height={450} data={data}>
        <CartesianGrid strokeDasharray="5 3" />
        <XAxis dataKey="month" fontSize={"1rem"} />
        <YAxis fontSize={"1rem"} type="number" includeHidden />
        <Tooltip />
        <Legend />
        <Bar
          label={{ fill: "#2b4052", fontSize: 15 }}
          dataKey="ventas"
          fill="#4c54c74a"
          barSize={50}
        />
        <Area dataKey="ventas" />
      </BarChart>
    </StyleSalesChart>
  );
}
