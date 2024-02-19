import styled from "styled-components";

const TableFooter = styled.footer`
  background-color: #ffffff;
  width: auto;
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

export default TableFooter;