import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { color } from "../../utils/helpers";

const StyleOrders = styled.div`
  width: 20%;
  height: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #f6f6f6e4;
  border-radius: 10px;
  box-shadow: 2px 3px 4px #00000044;
`;

const UList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
  gap: 5px;
`;
const List = styled.li`
  border-radius: 5px;
  padding: 1px 5px;
`;

// const data = [
const data = [
  { name: "10 - 11 AM", ventas: 50, color: "" },
  { name: "12 - 1 PM", ventas: 120, color: "" },
  { name: "2 - 3 PM", ventas: 190, color: "" },
  { name: "4 - 5 PM", ventas: 150, color: "" },
  { name: "6 - 7 PM", ventas: 100, color: "" },
  { name: "8 - 9 PM", ventas: 190, color: "" },
  { name: "10 - 11 PM", ventas: 150, color: "" },
];

const COLORS = ["#00df00", "#e0a77f", "#0fa5a5", "#fff20f", "#bbbbbb"];

for (let i = 0; i < data.length; i++) {
  const porce = (data[i].ventas / 200) * 100;

  const pColor = color(porce, COLORS);
  data[i].color = pColor;
}

export default function DayChart() {
  return (
    <StyleOrders>
      <h5>Horarios de mejor venta</h5>
      <hr width="100%" />
      <ResponsiveContainer width="90%" height="50%">
        <PieChart width={350} height={200}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={70}
            paddingAngle={4}
            dataKey="ventas"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} fontSize={"1rem"}>
                {entry.color}
              </Cell>
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <UList>
        {data.map((e, index) => (
          <List key={index} style={{ background: `${e.color}` }}>
            {e.name}
          </List>
        ))}
      </UList>
    </StyleOrders>
  );
}
