import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyleNav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const StyleNavLink = styled(NavLink)`
  text-decoration: none;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    text-decoration: none;

    color: #333333;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.2rem 1rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: green;
    background-color: #307a3065;
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
      <StyleNavLink to="orders">Orders</StyleNavLink>
      <StyleNavLink to="inventory">Inventory</StyleNavLink>
      <StyleNavLink to="users">Users</StyleNavLink>
    </StyleNav>
  );
}
