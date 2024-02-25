/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import styled from "styled-components";
import { useOutsideClick } from "../Hooks/useOutsideClick";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: 5px;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #bababa5b;
  }

  & svg {
    width: 2.4rem;
    height: 1.4rem;
    color: #484848;
  }
`;

const StyledList = styled.ul`
  position: absolute;
  background-color: #ffffff;
  box-shadow: 6px 4px 5px #16161652;
  border-radius: 5px;
  z-index: 3;

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: #e6bc14;
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: #e67314;
    transition: all 0.3s;
  }
`;

const MenuContext = createContext();

export default function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenuContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenuContext);
  function handleClick(e) {
    e.stopPropagation();

    setPosition({
      x: 1,
      y: 70,
    });

    openId === "" || openId !== id ? open(id) : close();
  }
  return (
    <StyledToggle onClick={handleClick}>
      <HiDotsHorizontal />
    </StyledToggle>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(MenuContext);

  // const { ref } = useOutsideClick(close);
  const { ref } = useOutsideClick(close, false);

  if (openId !== id) {
    return null;
  }
  return (
    <StyledList ref={ref} position={position}>
      {children}
    </StyledList>
  );
  // return createPortal(
  //   <StyledList ref={ref} position={position}>
  //     {children}
  //   </StyledList>,
  //   document.body
  // );
}
function Button({ disabled, children, icon = "", onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton disabled={disabled} onClick={handleClick}>
        {icon}
        {children}
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
