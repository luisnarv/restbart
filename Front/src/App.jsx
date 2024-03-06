import { Outlet } from "react-router-dom";
import Header from "./UI/Header";
import styled from "styled-components";
import NavBar from "./UI/NavBar";

const StyleApp = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  padding: 2rem 2.8rem 2.4rem;
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
