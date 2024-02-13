import styled from "styled-components";
import FormRowVertical from "../UI/FormRowVertical";
import Form from "../UI/Form";
import Input from "../UI/Input";

const StyleLogin = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  return (
    <StyleLogin>
      <Form>
        <FormRowVertical label="User Email">
          <Input type="text" />
        </FormRowVertical>
        <FormRowVertical label="User Password">
          <Input type="password" />
        </FormRowVertical>
      </Form>
    </StyleLogin>
  );
}
