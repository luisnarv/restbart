import { Outlet } from "react-router-dom";
import Header from "./UI/Header";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
