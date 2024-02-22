import Form from "../../UI/Form";
import FormRowVertical from "../../UI/FormRowVertical";
import Input from "../../UI/Input";
import Textarea from "../../UI/Textarea";
import Select from "../../UI/Select";
import styled from "styled-components";
import Heading from "../../UI/Heading";
import Button from "../../UI/Button";

const StyleOrderForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default function CreateOrderForm() {
  return (
    <StyleOrderForm>
      <Heading as="h2">Crear Orden</Heading>
      <Form>
        <FormRowVertical label="Nombre del cliente">
          <Input type="text" placeholder="Nombre de cliente" />
        </FormRowVertical>
        {/*Para saber dónde entregar el pedido.*/}
        <FormRowVertical label="Número de mesa">
          <Input type="text" placeholder="# Mesa" />
        </FormRowVertical>
        <FormRowVertical label="Alergias alimentarias">
          <Textarea placeholder="Eje: Mani, chocolate, nueces, etc... " />
        </FormRowVertical>

        {/* Esto incluye el nombre del plato, las modificaciones o preferencias especiales (por ejemplo, sin cebolla, bien hecho, etc.), y la cantidad de cada plato.  */}
        <FormRowVertical label="Detalles del pedido">
          <Textarea placeholder="plato, modificaciones, preferencias" />
        </FormRowVertical>
        {/**Qué bebidas desea el cliente y cuántas. */}
        <FormRowVertical label="Bebidas">
          <Select className="content-select">
            <option>Cocacola</option>
            <option>Jugo natural</option>
            <option>Jugo natural 2</option>
            <option>Sr toronja</option>
          </Select>
        </FormRowVertical>
        <FormRowVertical label="Postre">
          <Select>
            <option>Postre 1</option>
            <option>Postre 2</option>
            <option>Postre 3</option>
            <option>Postre 4</option>
          </Select>
        </FormRowVertical>
        <Button>Crear</Button>
      </Form>
    </StyleOrderForm>
  );
}
