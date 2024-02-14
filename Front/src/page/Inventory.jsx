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

export default function Inventory() {
  return (
    <div>
      Inventory
      <h2>Inventario del Restaurante</h2>
      <Table>
        <TableHeader>
          <tr>
            <Table.th>Nombre</Table.th>
            <Table.th>Cantidad</Table.th>
            <Table.th>Unidad</Table.th>
          </tr>
        </TableHeader>
        <TableTbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <Table.td>{item.nombre}</Table.td>
              <Table.td>{item.cantidad}</Table.td>
              <Table.td>{item.unidad}</Table.td>
            </tr>
          ))}
        </TableTbody>
      </Table>
    </div>
  );
}
