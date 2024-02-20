import styled from "styled-components";
import Stat from "./Stat";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { GiCoins } from "react-icons/gi";
import { PiCookingPot, PiUsersFourLight } from "react-icons/pi";
import { SlSocialGoogle } from "react-icons/sl";

const StyleStats = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 0px 20px;
  gap: 10px;
  box-shadow: 2px 3px 4px #00000044;
`;

const ColumnLine = styled.hr`
  margin: 10px;
`;

export default function Stats() {
  return (
    <StyleStats>
      <Stat
        color="red"
        icon={<HiOutlineChartSquareBar />}
        title="ventas del día"
        value="$2500"
      />
      <ColumnLine />
      <Stat color="green" icon={<GiCoins />} title="Costos" value="$1000" />
      <ColumnLine />
      <Stat
        color="#f38009"
        icon={<PiCookingPot />}
        title="Plato más vendido"
        value="Pasta Carbonara"
      />
      <ColumnLine />
      <Stat
        icon={<PiUsersFourLight />}
        color="brown"
        title="Clientes"
        value="200"
      />
      <ColumnLine />
      <Stat
        icon={<SlSocialGoogle />}
        title="Reseñas de Google"
        color="#0f42d3"
        value="4.5"
      />
    </StyleStats>
  );
}

/*
value2="Total transacciones: 125"
<p>Gastos operativos: $800</p> <p>Total de costos: $1800</p>
<p>Cantidad vendida: 60</p>{<p> órdenes Ingresos generados por este plato: $1200</p>{" "}
*/
