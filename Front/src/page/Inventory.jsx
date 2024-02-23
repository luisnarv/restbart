import styled from "styled-components";

import Heading from "../UI/Heading";
import AddItemWithFilter from "../feactures/Inventory/AddItemWithFilter";
import InventoryTable from "../feactures/Inventory/InventoryTable";

const StyleInventory = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 3px 4px #00000044;
  background-color: white;
  border-radius: 10px;
`;

export default function Inventory() {
  return (
    <StyleInventory>
      <Heading as="h1">Inventario del Restaurante</Heading>
      <br />
      <AddItemWithFilter />
      <InventoryTable />
    </StyleInventory>
  );
}
