import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const StyleOrders = styled.div`
  width: 40%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6e4;
  border-radius: 10px;
  box-shadow: 2px 3px 4px #00000044;
`;

const dataPai = [
  { name: "10AM", ventas: 20 },
  { name: "11AM", ventas: 30 },
  { name: "12PM", ventas: 50 },
  { name: "1PM", ventas: 70 },
  { name: "2PM", ventas: 90 },
  { name: "3PM", ventas: 100 },
  { name: "4PM", ventas: 80 },
  { name: "5PM", ventas: 70 },
  { name: "6PM", ventas: 60 },
  { name: "7PM", ventas: 40 },
  { name: "8PM", ventas: 30 },
];

export default function DayChart() {
  return (
    <StyleOrders>
      <h3>Momentos de mayor demanda</h3>

      <ResponsiveContainer width="70%" height="90%">
        <LineChart
          layout="vertical"
          width={500}
          height={300}
          data={dataPai}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" fontSize={"1rem"} />
          <YAxis dataKey="name" type="category" fontSize={"1rem"} />
          <Tooltip separator=" + " labelStyle={{ fontSize: "1rem" }} />

          <Legend
            verticalAlign="top"
            height={36}
            payload={[
              {
                value: "Ventas del día",
                type: "rect",
                id: "ID01",
                color: "#c63131",
              },
            ]}
          />
          <Line dataKey="ventas" stroke="#c63131" />
        </LineChart>
      </ResponsiveContainer>
    </StyleOrders>
  );
}
