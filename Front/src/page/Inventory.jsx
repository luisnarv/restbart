import styled from "styled-components";
import Filter from "../UI/Filter";
import InventoryRows from "../feactures/Inventory/InventoryRows";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableTbody from "./TableTbody";
import Input from "../UI/Input";

const inventoryData = [
  { nombre: "Carne de res", cantidad: 20, unidad: "kg" },
  { nombre: "Pollo", cantidad: 15, unidad: "kg" },
  { nombre: "Pescado", cantidad: 10, unidad: "kg" },
  { nombre: "Arroz", cantidad: 30, unidad: "kg" },
  { nombre: "Frijoles", cantidad: 25, unidad: "kg" },
  { nombre: "Harina", cantidad: 40, unidad: "kg" },
  { nombre: "Verduras mixtas", cantidad: 35, unidad: "kg" },
  { nombre: "Queso", cantidad: 12, unidad: "kg" },
  { nombre: "Aceite de oliva", cantidad: 5, unidad: "kg" },
  { nombre: "Azúcar", cantidad: 20, unidad: "kg" },
  { nombre: "Sal", cantidad: 10, unidad: "kg" },
  { nombre: "Cocacola", cantidad: 50, unidad: "botellas" },
  { nombre: "Jugo de naranja", cantidad: 30, unidad: "litros" },
  { nombre: "Cerveza", cantidad: 100, unidad: "botellas" },
  { nombre: "Vino tinto", cantidad: 20, unidad: "botellas" },
  { nombre: "Agua mineral", cantidad: 50, unidad: "botellas" },
];

const StyleInventory = styled.div`
  margin: 5%;
  align-items: center;
`;

const fakeHeaders = ["Nombre", "Cantidad", "Unidad"];
export default function Inventory() {
  return (
    <StyleInventory>
      <h2>Inventario del Restaurante</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Input type="search" placeholder="Search.." />

        <Filter
          filterName="orders"
          options={[
            { value: "all", label: "ALL" },
            { value: "agotado", label: "Agotado" },
            { value: "conservado", label: "Conservado" },
          ]}
        />
      </div>
      <br />
      <Table>
        <TableHeader data={fakeHeaders} />

        <TableTbody
          data={inventoryData}
          render={(item, index) => <InventoryRows item={item} index={index} />}
        />
      </Table>
    </StyleInventory>
  );
}
