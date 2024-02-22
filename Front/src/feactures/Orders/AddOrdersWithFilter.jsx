import styled from "styled-components";

import Button from "../../UI/Button";
import Filter from "../../UI/Filter";
import Modal from "../../UI/Modal";
import CreateOrderForm from "./CreateOrderForm";

const StyledComponent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export default function AddOrdersWithFilter() {
  return (
    <StyledComponent>
      <Modal>
        <Modal.Open opens="newOrder">
          <Button>Añadir Orden</Button>
        </Modal.Open>
        <Modal.Window name="newOrder">{<CreateOrderForm />}</Modal.Window>
      </Modal>

      <Filter
        filterName="orders"
        options={[
          { label: "Todo", value: "All" },
          { label: "A - Z", value: "A-Z" },
          { label: "Z - A", value: "Z-A" },
        ]}
      />
    </StyledComponent>
  );
}
