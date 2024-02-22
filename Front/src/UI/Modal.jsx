/* eslint-disable react/prop-types */
import styled from "styled-components";
// import { HiOutlineX } from "react-icons/hi";
import { createPortal } from "react-dom";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { cloneElement } from "react";
import { useOutsideClick } from "../Hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffbfb;
  border-radius: 10px;
  box-shadow: 5px 8px 8px #00000040;
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #dadada8f;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: 5px;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: #e9e9e9;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: red;
  }
`;

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>{/* <HiOutlineX /> */}cerrar</Button>
        <div>{cloneElement(children, { onCloseModal: close })} </div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}
Modal.Open = Open;
Modal.Window = Window;
