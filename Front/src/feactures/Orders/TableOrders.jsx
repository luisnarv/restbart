/* eslint-disable react/prop-types */
import styled from "styled-components";
import Table from "../../page/Table";
import TableHeader from "../../page/TableHeader";
import TableTbody from "../../page/TableTbody";
import OrdersRow from "./OrdersRow";
import TableFooter from "../../page/TableFooter";
import Pagination from "../../page/Pagination";

const StyleTable = styled.div``;

export default function TableOrders({ fakeHeaders, ordersData }) {
  return (
    <StyleTable>
      <Table>
        <TableHeader data={fakeHeaders} color={"#fac800;"} />
        <TableTbody
          data={ordersData.slice(0, 10)}
          render={(order, index) => <OrdersRow order={order} index={index} />}
        />
      </Table>
      <br />
      <TableFooter>
        <Pagination count={100} />
      </TableFooter>
      <br />
    </StyleTable>
  );
}
