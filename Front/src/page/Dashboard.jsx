import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CreateOrderForm from "../feactures/Orders/CreateOrderForm";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <Modal>
        <Modal.Open opens="modal1">
          <Button>abrir modal</Button>
        </Modal.Open>
        <Modal.Window name="modal1">{<CreateOrderForm />}</Modal.Window>
      </Modal>
    </div>
  );
}
