import InventoryRows from "../feactures/Inventory/InventoryRows";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableTbody from "./TableTbody";

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

const fakeHeaders = ["Nombre", "Cantidad", "Unidad"];
export default function Inventory() {
  return (
    <div>
      <h2>Inventario del Restaurante</h2>
      <Table>
        <TableHeader data={fakeHeaders} />

        <TableTbody
          data={inventoryData}
          render={(item, index) => <InventoryRows item={item} index={index} />}
        />
      </Table>
    </div>
  );
}
