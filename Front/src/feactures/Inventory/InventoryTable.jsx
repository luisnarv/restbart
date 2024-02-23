import styled from "styled-components";
import Table from "../../page/Table";
import TableHeader from "../../page/TableHeader";
import TableTbody from "../../page/TableTbody";
import InventoryRows from "./InventoryRows";
import TableFooter from "../../page/TableFooter";
import Pagination from "../../page/Pagination";

const StyleInventory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 3px 4px #00000044; */
`;

const fakeHeaders = ["Nombre", "Cantidad", "Unidad", " + ", " - "];
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

export default function InventoryTable() {
  return (
    <StyleInventory>
      <Table>
        <TableHeader data={fakeHeaders} color="#fac800" />
        <TableTbody
          data={inventoryData}
          render={(item, index) => (
            <>
              <InventoryRows item={item} index={index} />
            </>
          )}
        />
      </Table>
      <br />
      <TableFooter>
        <Pagination count={100} />
      </TableFooter>
      <br />
    </StyleInventory>
  );
}
