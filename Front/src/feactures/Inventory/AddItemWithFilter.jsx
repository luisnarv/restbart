import styled from "styled-components";
import Input from "../../UI/Input";
import Filter from "../../UI/Filter";

const StyleCom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function AddItemWithFilter() {
  return (
    <StyleCom>
      <Input type="search" placeholder="Search.." />
      <Filter
        filterName="orders"
        options={[
          { value: "all", label: "ALL" },
          { value: "agotado", label: "Agotado" },
          { value: "conservado", label: "Conservado" },
        ]}
      />
    </StyleCom>
  );
}
