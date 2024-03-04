/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

const StyleSalesChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 400px;
  border-radius: 10px;
  box-shadow: 2px 3px 4px #00000044;
`;
export default function SalesChart({ data }) {
  return (
    <StyleSalesChart>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" fontSize={"1rem"} />
          <YAxis fontSize={"1rem"} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ventas"
            stroke="#0004ff"
            fill="#0b6bcb85"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyleSalesChart>
  );
}
//   return (
//     <StyleSalesChart>
//       <BarChart width={930} height={450} data={data}>
//         <CartesianGrid strokeDasharray="5 3" />
//         <XAxis dataKey="month" fontSize={"1rem"} />
//         <YAxis fontSize={"1rem"} type="number" includeHidden />
//         <Tooltip />
//         <Legend />
//         <Bar
//           label={{ fill: "#2b4052", fontSize: 15 }}
//           dataKey="ventas"
//           fill="#4c54c74a"
//           barSize={50}
//         />
//         <Area dataKey="ventas" />
//       </BarChart>
//     </StyleSalesChart>
//   );
//}
