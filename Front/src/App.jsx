import { Outlet } from "react-router-dom";
import Header from "./UI/Header";
import styled from "styled-components";
import NavBar from "./UI/NavBar";

const StyleApp = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-color: #dcdcdc29;
  overflow: scroll;
`;

export default function App() {
  return (
    <StyleApp>
      <Header />
      <NavBar />
      <Main>
        <Outlet />
      </Main>
    </StyleApp>
  );
}
