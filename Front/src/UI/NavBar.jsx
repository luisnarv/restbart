import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyleNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  grid-row: 1 / -1;
  padding: 10% 5% 0% 5%;
  box-shadow: -1px 6px 11px 0px #00000047;
`;

const StyleNavLink = styled(NavLink)`
  text-decoration: none;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    text-decoration: none;
    text-transform: capitalize;
    color: #dc2f24;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.2rem 1rem;
    transition: all 0.4s;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    filter: invert(1);
    text-decoration: overline;
    border-radius: 5px;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: gray;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: gray;
  }
`;

export default function NavBar() {
  return (
    <StyleNav>
      <StyleNavLink to="dashboard">dashboard</StyleNavLink>
      <StyleNavLink to="orders">Ordenes</StyleNavLink>
      <StyleNavLink to="inventory">Inventario</StyleNavLink>
      <StyleNavLink to="users">Usuarios</StyleNavLink>
    </StyleNav>
  );
}
