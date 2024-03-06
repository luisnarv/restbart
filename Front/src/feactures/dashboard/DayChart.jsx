import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const StyleOrders = styled.div`
  width: 40%;
  padding: 10px;
  display: flex;
  height: 280px;
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

const data = [
  { name: "Lunes", ventas: 2500, color: "#0428f6" },
  { name: "Martes", ventas: 2800, color: "#f8832f" },
  { name: "Miércoles", ventas: 3200, color: "#14cddb" },
  { name: "Jueves", ventas: 3000, color: "#fff20f" },
  { name: "Viernes", ventas: 3500, color: "#ec391d" },
  { name: "Sábado", ventas: 4000, color: "#8ae8e3" },
  { name: "Domingo", ventas: 4200, color: "#9dde25" },
];

export default function DayChart() {
  return (
    <StyleOrders>
      <h5>Días de mejor venta</h5>
      <hr width="100%" />
      <ResponsiveContainer width="90%" height="70%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={20}
            outerRadius={50}
            paddingAngle={10}
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
